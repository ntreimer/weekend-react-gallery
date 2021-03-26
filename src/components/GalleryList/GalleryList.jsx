import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    return (
        <>
            <p>Your photos:</p>
            <div>
                {props.images.map( (image, index) =>(<GalleryItem image={image} key={index}/>) ) }
            </div>
        </>
    );
}

export default GalleryList;