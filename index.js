import React, {Component} from 'react';
import './style.css';

class App extends Component{
    componentDidMount(){
        state = {
            apodImages: [],
        }
        fetch('https://api.nasa.gov/planetary/apod?api_key=STXM8eM5nh0gYoIGwu9LBHAJUXdJ6HsO6ipuiL62&count=10')
        .then(fetchResults =>{
            if(!fetchResults.ok){
                throw new Error('Something went wrong in accessing the API.');
            }
            return fetchResults.json();
        })
        .then(jsonResults => {
            this.setState({
                apodImages: jsonResults
            })
        })
        .catch(error => console.log(error.message));
    }

    render(){
        return( 
            <div class='images-container'>
                {this.state.apodImages.map(image => 
                    <div class="image">
                        <img src={image.hdurl} alt={image.title}>
                        <h4>{image.title}</h4>
                        <p>{image.explanation}</p>
                    </div>
                )}

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)