// src/components/Gallery.js
import React from 'react';

const artworks = [
  { src: '/assets/images/artwork1.jpg', title: 'Artwork 1' },
  { src: '/assets/images/artwork2.jpg', title: 'Artwork 2' },
  // Add more artwork objects here
];

const Gallery = () => {
  return (
    <div className="gallery">
      {artworks.map((art, index) => (
        <div key={index} className="gallery-item">
          <img src={art.src} alt={art.title} />
          <p>{art.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
