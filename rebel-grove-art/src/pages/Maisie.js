import React from 'react';
import './Maisie.css';

const Maisie = () => {
  return (
    <div className="maisie-container">
      <h1>Maisie Lund.</h1>
      <p className="intro-paragraph">
        Maisie Lund is a self-taught artist living in the UK, currently exploring layering acrylics on canvas. 
        She uses visible brush strokes and texture to create vibrant skeletal figures with a gothic twist. 
        The Skeleton Collection features themes of death, life, love, and mortality.
      </p>
      <div className="gallery">
        <div className="gallery-item large">
          <img src="/artworks/blueSkeleton.png" alt="Large Item 1" />
        </div>
        <div className="gallery-item medium">
          <img src="/artworks/redSkeleton.png" alt="Medium Item 2" />
        </div>
        <div className="gallery-item small">
          <img src="/artworks/mauveSkeleton.png" alt="Small Item 3" />
        </div>
        <div className="gallery-item small">
          <img src="/artworks/redSkeleton.png" alt="Small Item 4" />
        </div>
        <div className="gallery-item medium">
          <img src="/artworks/mauveSkeleton.png" alt="Medium Item 5" />
        </div>
        <div className="gallery-item large">
          <img src="/artworks/graySkeleton.png" alt="Large Item 6" />
        </div>
      </div>
    </div>
  );
}

export default Maisie;

