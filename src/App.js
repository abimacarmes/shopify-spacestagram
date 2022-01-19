import React, { Component } from 'react'
import Image from './Image.js';
import './App.css';

export default class App extends Component {
  state = {
    apiResults : []
  }

  componentDidMount(){
    this.fetchApiResults();
  }

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
    let maxDate = new Date().toISOString().split('T')[0];

    return (
      <div className="App">
        <div className='date-filter'>
          <h3>Get specific Picture of the Day:</h3>
          <input id='date-input' type='date' name='date' min='2015-01-01' max={maxDate} onChange={() => this.fetchApiResultsDate()}></input>
          <button className='reset' onClick={() => this.fetchApiResults()}>Reset</button>
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
