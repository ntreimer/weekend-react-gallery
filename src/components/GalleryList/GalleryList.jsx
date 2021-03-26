import React from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    return (
        <>
            <p>I'm the gallery List!</p>
            <ul>
                <GalleryItem />
            </ul>
        </>
    );
}

export default GalleryList;