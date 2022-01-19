import React, { useState } from 'react';

function Image(props) {
    //Store the passed values as variables.
    let {image} = props;
    let {key} = props;

    let url = (image.hdurl ? image.hdurl : image.url);

    //Utilizes the useState hook to allow for state storage in a functional component.
    const [liked, setLiked] = useState(false);
    const [share, setShare] = useState(false);

    //A card is made for each image with the image, title, explanation, date, like button and a button to get a shareable link.
    return (
      <div key={key} className='card'>
        <img className='image' src={url} alt={'Photo of the day from NASA for date: ' + image.date}/>
        <div className='image-text'>
            <h3>{image.title}</h3>
            <p>{image.explanation}</p>
            <h4>Date: {image.date}</h4>
            <div className='image-buttons'>   
                <button className={liked ? 'button-pressed' : ''} onClick={() => setLiked(!liked)}>
                    {liked ? 'Unlike' : 'Like'}
                </button>
                <button className={share?'button-pressed button-share':'button-share'} onClick={() => setShare(!share)}>
                    Share Image
                </button>
                <a className={share ? '' :'hidden'} href={url} 
                    onClick={(event) => {
                        event.preventDefault();
                        window.open(url);
                }}>{url}</a>
            </div>
        </div>
      </div>
    );
  }
  
  export default Image;
  