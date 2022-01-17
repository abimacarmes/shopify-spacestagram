import React, { Component } from 'react'
import ReactDOM from 'react-dom';
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
    fetch('https://api.nasa.gov/planetary/apod?api_key=STXM8eM5nh0gYoIGwu9LBHAJUXdJ6HsO6ipuiL62&count=10')
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

  handleScroll = () => {
    console.log('scroll')
    this.fetchApiResults();
    var isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight;
    if(isAtBottom){
      
    }
  }
  
  render(){
    

    return (
      <div className="App">
        <header className="App-header">
          <h1>Spacestagram</h1>
          <h2>Your go-to source of NASA images - peruse at your leisure!</h2>
          <h4>Built by Abigail MacKenzie-Armes</h4>
        </header>
        <div className='images-container'>
          {this.state.apiResults.map(image => <Image image={image}/>)}
        </div>
      </div>
    )
  }
}
