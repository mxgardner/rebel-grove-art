// src/pages/About.js
import React from 'react';
import './Bill.css'

const Bill = () => {
  return (
    <div className="bill-container">
      <h1>Amelia Lund.</h1>
      <p className="intro-paragraph">
        Amelia is a digital artist based in the UK, who focuses on capturing colourful emotions in a variety of styles.
      </p>
      <div className="gallery">
        <div className="gallery-item large">
          <img src="/artworks/landscape.png" alt="Large Item 1" />
        </div>
        <div className="gallery-item medium">
          <img src="/artworks/face.png" alt="Medium Item 2" />
        </div>
        <div className="gallery-item small">
          <img src="/artworks/ciggy.png" alt="Small Item 3" />
        </div>
        <div className="gallery-item small">
          <img src="/artworks/landscape.png" alt="Small Item 4" />
        </div>
        <div className="gallery-item medium">
          <img src="/artworks/twoFaces.png" alt="Medium Item 5" />
        </div>
        <div className="gallery-item large">
          <img src="/artworks/ghostGirl.png" alt="Large Item 6" />
        </div>
      </div>
    </div>
  );
}

export default Bill;
