import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios';

function GalleryList(props) {
    const like = props.like;
    const get = props.get;
    return (
        <>
            <p>Your photos:</p>
            <div>
                {props.images.map( (image, index) => (<GalleryItem image={image} key={index} like={like} get={get}/>) ) }
            </div>
        </>
    );
}

export default GalleryList;