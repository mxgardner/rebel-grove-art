import React, { useEffect, useRef } from 'react';
import '../App.css';

const Shop = () => {
  // Use a ref to keep track of whether the Buy Button has been initialized
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return; // Prevent double initialization

    // Load the Shopify Buy Button script dynamically
    const script = document.createElement('script');
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (!isInitialized.current) {
        ShopifyBuyInit();
        isInitialized.current = true; // Set the flag to true after initialization
      }
    };

    // Define the ShopifyBuyInit function
    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: '88bade-d9.myshopify.com',
        storefrontAccessToken: process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN,
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        // Array of product IDs and their corresponding element IDs
        const products = [
          { id: '11434752606476', elementId: 'product-component-1730249344533' },
          { id: '11425185464588', elementId: 'product-component-1730249954088' },
          { id: '8842621583628', elementId: 'product-component-1730250091886' },
          { id: '9707234787596', elementId: 'product-component-1730250128925' },
          { id: '8842724016396', elementId: 'product-component-1730250149158' },
          { id: '8842703536396', elementId: 'product-component-1730250169883' },
        ];

        // Loop through each product to create a Buy Button
        products.forEach((product) => {
          ui.createComponent('product', {
            id: product.id,
            node: document.getElementById(product.elementId),
            moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
            options: {
              product: {
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': '100%',
                      'margin-left': '0',
                      'margin-bottom': '50px'
                    },
                    'text-align': 'left'
                  },
                  title: { 'font-size': '26px' },
                  price: { 'font-size': '18px' },
                  compareAt: { 'font-size': '15.3px' },
                  unitPrice: { 'font-size': '15.3px' }
                },
                layout: 'horizontal',
                contents: { img: false, imgWithCarousel: true, description: true },
                width: '100%',
                text: { button: 'Add to cart' }
              },
              modalProduct: {
                contents: {
                  img: false,
                  imgWithCarousel: true,
                  button: false,
                  buttonWithQuantity: true
                },
                styles: {
                  product: {
                    '@media (min-width: 601px)': {
                      'max-width': '100%',
                      'margin-left': '0px',
                      'margin-bottom': '0px'
                    }
                  },
                  title: { 'font-size': '26px', color: '#4c4c4c' },
                  price: { 'font-size': '18px', color: '#4c4c4c' },
                  compareAt: { 'font-size': '15.3px', color: '#4c4c4c' },
                  unitPrice: { 'font-size': '15.3px', color: '#4c4c4c' }
                },
                text: { button: 'Add to cart' }
              },
              cart: {
                text: { total: 'Subtotal', button: 'Checkout' }
              }
            }
          });
        });
      });
    }

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <div className="product-grid">
        {/* Render six placeholders for each product */}
        <div id="product-component-1730249344533" className="product-item"></div>
        <div id="product-component-1730249954088" className="product-item"></div>
        <div id="product-component-1730250091886" className="product-item"></div>
        <div id="product-component-1730250128925" className="product-item"></div>
        <div id="product-component-1730250149158" className="product-item"></div>
        <div id="product-component-1730250169883" className="product-item"></div>
      </div>
    </div>
  );
}

export default Shop;
