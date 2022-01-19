import React, { Component } from 'react';
import Image from './Image.js';
import './App.css';

export default class App extends Component {
  //State will store API data fetched.
  state = {
    apiResults : []
  }

  //Upon component mount, perform an initial API call to load images to the app.
  componentDidMount(){
    this.fetchApiResults();
  }

  //Function to pull further results and add them to the array stored in state.
  fetchApiResults = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=STXM8eM5nh0gYoIGwu9LBHAJUXdJ6HsO6ipuiL62&count=5')
      .then(response => response.json())
      .then(responseJson => {
          let prevResults = this.state.apiResults;
          prevResults.push(...responseJson);

          this.setState({
            apiResults : prevResults
          })
      })
      .catch(error => alert(error.message));
  }
  
  //Function to pull the image for a particular date based on input from the user.
  fetchApiResultsDate = () => {
    let date = document.getElementById('date-input').value;    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=STXM8eM5nh0gYoIGwu9LBHAJUXdJ6HsO6ipuiL62&date=${date}`)
      .then(response => response.json())
      .then(responseJson => {
        let newResults = [];
        newResults.push(responseJson);
        this.setState({
            apiResults : newResults
          })
      })
      .catch(error => alert(error.message));
  }

  render(){
    //Ensures that the user can't choose a date greater than today.
    let maxDate = new Date().toISOString().split('T')[0];

    //App contains 3 portions: filter, image-container, and load button.

    return (
      <div className="App">
        <div className='date-filter'>
          <h3>Get specific Picture of the Day:</h3>
          <form onSubmit={(event) => {
              event.preventDefault();
              this.fetchApiResultsDate();
            }}>
            <input id='date-input' type='date' name='date' min='1996-01-01' max={maxDate}></input>
            <button type='submit'>Submit</button>
            <button className='reset' onClick={() => this.fetchApiResults()}>Reset</button>
          </form>
        </div>
        <div className='images-container'>
          {this.state.apiResults.map(image => <Image id={this.state.apiResults.indexOf(image)} image={image}/>)}
        </div>
        <div className='load'>
          <button className='load-button' onClick={() => this.fetchApiResults()} >Load More Images</button>
        </div>
      </div>
    )
  }
}
