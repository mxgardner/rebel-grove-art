// src/pages/Home.js
import React from 'react';
import Carousel from '../components/Carousel';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="rotating-text-wrapper">
        <h1 className="rotating-text">Welcome to the Art Studio</h1>
      </div>
      <Carousel />
    </div>
  );
}

export default Home;
