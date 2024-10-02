import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/">home.</Link></li>
          <li><Link to="/maise">maisie.</Link></li>
          <li><Link to="/bill">bill.</Link></li>
          <li><Link to="/shop">shop.</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;