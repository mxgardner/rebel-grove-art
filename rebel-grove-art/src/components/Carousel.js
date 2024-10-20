// src/components/Carousel.js
import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css'; 

const Carousel = () => {
  const [rotation, setRotation] = useState(0); 
  const [isDragging, setIsDragging] = useState(false); 
  const [startX, setStartX] = useState(0); 
  const carouselRef = useRef(null);

  // Function to handle mouse or touch start
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX; 
    setStartX(clientX); 
  };

  // Function to handle mouse or touch move
  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX; 
    const newRotation = rotation + (clientX - startX) / 2; 
    setRotation(newRotation);
    setStartX(clientX); 
  };

  // Function to handle mouse or touch end
  const handleDragEnd = () => {
    setIsDragging(false); 
  };

  useEffect(() => {
    // Add event listeners for mouse move, touch move, and end events
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('touchmove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);
    } else {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    }

    // Cleanup listeners
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging]);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `rotateY(${rotation}deg)` }} // Rotate based on state
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart} // Add touch start listener
        ref={carouselRef}
      >
        {/* These are the carousel items */}
        <div className="carousel-item" style={{ backgroundImage: `url('/artworks/ghostGirl.png')` }}></div>
        <div className="carousel-item" style={{ backgroundImage: `url('/artworks/mauveSkeleton.png')` }}></div>
        <div className="carousel-item" style={{ backgroundImage: `url('/artworks/ciggy.png')` }}></div>
        <div className="carousel-item" style={{ backgroundImage: `url('/artworks/landscape.png')` }}></div>
        <div className="carousel-item" style={{ backgroundImage: `url('/artworks/redSkeleton.png')` }}></div>
      </div>
    </div>
  );
};

export default Carousel;

