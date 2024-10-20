import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Maisie from './pages/Maisie';
import Bill from './pages/Bill';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maisie" element={<Maisie />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

