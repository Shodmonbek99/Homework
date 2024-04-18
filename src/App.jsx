import React, { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState('img.URL');

  const fetchRandomImage = () => {
    fetch('https://source.unsplash.com/random')
      .then(response => {
        setImage(response.url);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <h1>Rasmlar</h1>
      <div className="image-container">
        <img src={image} alt="Tasodifiy" />
      </div>
      <button onClick={fetchRandomImage}>Submit</button>
    </div>
  );
}

export default App;
