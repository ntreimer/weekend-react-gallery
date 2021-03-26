import React from 'react';
import './GalleryItem.css';
import {useState} from 'react';

function GalleryItem(props) {
    const [showDescription, setShowDescription] = useState(false);
    console.log(props.image);
    let displayDescription = () => {
        if(showDescription) {
            return props.image.description;
        }
        else {
            return <img src={props.image.path} id={props.image.id} height="200px" width="200px"/>
        }
    }
    let toggleDescription = () => {
        setShowDescription(!showDescription);
    }
    return (
        <div className="picture" height="200px" width="200px">
            <div onClick={toggleDescription}>{displayDescription()}</div>
            <p>Likes: {props.image.likes}</p>
            <button type="button">Like</button>
        </div>
    );
}

export default GalleryItem;