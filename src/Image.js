import React, { useState } from 'react';

function Image(props) {
    //Store the passed values as variables.
    let {image} = props;
    let {key} = props;

    //Utilizes the useState hook to allow for state storage in a functional component.
    const [liked, setLiked] = useState(false);
    const [share, setShare] = useState(false);

    //Checks whether there is an HD version of the photo and, if not, utilizes the regular url.
    let url = (image.hdurl ? image.hdurl : image.url);

    //A card is made for each image with the image, title, explanation, date, like button and a button to get a shareable link.
    //Additional check to ensure the media type is an image and if not, display a label for the image tag to inform the user.
    return (
      <div key={key} className='card'>
        <img id={key} className={image.media_type === 'image' ? 'image' : 'hidden'} src={url} alt={'Photo of the day from NASA for date: ' + image.date}/>
            <label for={key} className={image.media_type === 'image'? 'hidden':''}>The media for the day is an alternative media type. Use the 'Share' button to view. </label>  
        <div className='image-text'>
            <h3>{image.title}</h3>
            <p>{image.explanation}</p>
            <h4>Date: {image.date}</h4>
            <div className='image-buttons'>   
                <button className={liked ? 'button-pressed' : ''} onClick={() => setLiked(!liked)}>
                    {liked ? 'Unlike' : 'Like'}
                </button>
                <button className={share?'button-pressed button-share':'button-share'} onClick={() => setShare(!share)}>
                    Share
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
  