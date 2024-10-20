// src/pages/Contact.js
import React from 'react';

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <p>Feel free to reach out for commissions or collaborations.</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Shop;
