import React from 'react';
import './GalleryItem.css'

function GalleryItem(props) {
    console.log(props.image);
    return (
        <div className="picture"><img src={props.image.path} id={props.image.id} height="100px" width="100px"/></div>
    );
}

export default GalleryItem;