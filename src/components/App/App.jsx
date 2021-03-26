import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {
  // states
  const [galleryList, setGalleryList] = useState([]);

  // useEffect
  useEffect( () => {
    if(!galleryList[0]) {
      getGalleryList();
    }
  });
  const getGalleryList = () => {
    axios.get('/gallery').then((results) => {
      console.log('back from /gallery GET with:', results);
      setGalleryList(results.data);
    }).catch((err) => {
      console.log('error:', err);
    })
  }// end getGalleryList
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList images={galleryList}/>
    </div>
  );
}

export default App;
