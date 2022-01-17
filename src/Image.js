import React, { useState } from 'react';

function Image(props) {
    let {image} = props;
    const [liked, setLiked] = useState(false);
        
    return (
      <div className="image">
        <img src={image.hdurl}/>
        <h3>{image.title}</h3>
        <h4>{image.date}</h4>
        <p>{image.explanation}</p>
        <button className={liked ? 'liked' : ''} onClick={() => setLiked(!liked)}>
            {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    );
  }
  
  export default Image;
  