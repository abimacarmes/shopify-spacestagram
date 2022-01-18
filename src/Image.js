import React, { useState } from 'react';

function Image(props) {
    let {image} = props;
    let {key} = props;
    const [liked, setLiked] = useState(false);
        
    return (
      <div key={key} className='card'>
        <img className='image' src={image.hdurl}/>
        <div className='image-text'>
            <h3>{image.title}</h3>
            <p>{image.explanation}</p>
            <h4>Date: {image.date}</h4>
            <button className={liked ? 'liked' : ''} onClick={() => setLiked(!liked)}>
                {liked ? 'Unlike' : 'Like'}
            </button>
        </div>
      </div>
    );
  }
  
  export default Image;
  