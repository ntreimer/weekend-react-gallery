import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
import axios from "axios";

function App() {
  // states
  const [galleryList, setGalleryList] = useState([]);

  // useEffect
  useEffect(() => {
    if (!galleryList[0]) {
      getGalleryList();
    }
  });

  const getGalleryList = () => {
    axios
      .get("/gallery")
      .then((results) => {
        setGalleryList(results.data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }; // end getGalleryList
  const likePhoto = (event) => {
    const id = event.target.id;
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList images={galleryList} like={likePhoto} get={getGalleryList} />
    </div>
  );
}

export default App;
