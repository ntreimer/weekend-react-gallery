import React from 'react';
import './GalleryItem.css';
import {useState} from 'react';
import axios from 'axios';

function GalleryItem(props) {
    const [showDescription, setShowDescription] = useState(false);
    // const likePhoto = props.like;
    const likePhoto = props.like;
    const getGalleryList = props.get;
    const likeAndUpdate = (target) => {
        console.log('in likeandupdate');
        likePhoto(target);
        getGalleryList();
    }
    // console.log(likePhoto);
    const displayDescription = () => {
        if(showDescription) {
            return props.image.description;
        }
        else {
            return <img src={props.image.path} id={props.image.id} className="picture"/>
        }
    }
    const toggleDescription = () => {
        setShowDescription(!showDescription);
    }
    // const likePhoto = (event) => {
    //     const id = event.target.id;
    //     axios.put(`/gallery/like/${id}`).then((response) => {
    //       console.log('back from /gallery PUT with:', response);
    //     }).catch((err) => {
    //       console.log('error:', err);
    //     })
    // }
    return (
        <div className="post">
            <div className="content" onClick={toggleDescription}>{displayDescription()}</div>
            <p className="likes">Likes: {props.image.likes}</p>
            <button type="button" className="like-"id={props.image.id} onClick={likeAndUpdate}>Like</button>
        </div>
    );
}

export default GalleryItem;