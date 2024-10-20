// src/pages/Home.js
import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Art Portfolio</h1>
      <Carousel />
      <p>Explore the creative works of [Artist].</p>
      {/* You can add featured images or other components here */}
    </div>
  );
}

export default Home;
