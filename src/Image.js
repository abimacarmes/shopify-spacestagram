import React, { useState } from 'react';

function Image(props) {
    let {image} = props;
    let {key} = props;
    const [liked, setLiked] = useState(false);
    const [share, setShare] = useState(false);
    //<a href={image.hdurl} className={share ? 'share-link visible' : 'share-link'} onClick={() => window.open(image.hdurl)}>{image.hdurl}</a>    
    return (
      <div key={key} className='card'>
        <img className='image' src={image.hdurl}/>
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
                <a className={share ? '' :'hidden'} href="www.google.com" 
                    onClick={(event) => {
                        event.preventDefault();
                        window.open(image.hdurl);
                }}>{image.hdurl}</a>
            </div>
        </div>
      </div>
    );
  }
  
  export default Image;
  