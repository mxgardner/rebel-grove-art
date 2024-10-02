// src/components/Carousel.js
import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css'; // Make sure you have this file for styling

const Carousel = () => {
  const [rotation, setRotation] = useState(0); // Tracks the current rotation
  const [isDragging, setIsDragging] = useState(false); // Detect if dragging
  const [startX, setStartX] = useState(0); // Tracks the initial drag position
  const carouselRef = useRef(null);

  // Function to handle mouse or touch start
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX; // Get touch or mouse X position
    setStartX(clientX); // Capture the starting X position
  };

  // Function to handle mouse or touch move
  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX; // Get touch or mouse X position
    const newRotation = rotation + (clientX - startX) / 2; // Adjust rotation
    setRotation(newRotation);
    setStartX(clientX); // Update the start X position for smooth rotation
  };

  // Function to handle mouse or touch end
  const handleDragEnd = () => {
    setIsDragging(false); // Stop dragging when mouse/touch is released
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
        <div className="carousel-item" style={{ backgroundImage: 'url(/path/to/art1.jpg)' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url(/path/to/art2.jpg)' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url(/path/to/art3.jpg)' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url(/path/to/art4.jpg)' }}></div>
        <div className="carousel-item" style={{ backgroundImage: 'url(/path/to/art5.jpg)' }}></div>
      </div>
    </div>
  );
};

export default Carousel;

