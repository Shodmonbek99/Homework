import React, { useState } from 'react';
import './App.css';

const imageNames = [
  "./src/assets/aliaksei-unsplash1.jpg",
  "./src/assets/evgeni-unsplash2.jpg",
  "./src/assets/kellen-unsplash3.jpg",
  "./src/assets/marc-unsplash4.jpg",
];

function App() {
  const [counter, setCounter] = useState(0);

  const back = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const next = () => {
    if (counter === 0 || counter < imageNames.length - 1) {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img style={{ width: '18rem', height: '18rem' }} src={imageNames[counter]} alt="" />
      </div>
      <div className="button-container">
        <button type="button" className="btn btn-success" onClick={back}> Back </button>
        <button type="button" className="btn btn-dark" onClick={next}> Next </button>
      </div>
    </div>
  );
}

export default App;
