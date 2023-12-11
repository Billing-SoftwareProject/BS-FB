import React, { useState, useEffect } from 'react';
import './Boxitems.css';

const Boxitems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate fetching items from the server
    fetchItemsFromServer()
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  const fetchItemsFromServer = () => {
    // Mock API call to fetch items
    return new Promise((resolve) => {
      // Replace this with actual API fetch
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Item 1', price: 10.99, image: 'item1.jpg' },
          { id: 2, name: 'Item 2', price: 15.99, image: 'item2.jpg' },
          { id: 3, name: 'Item 3', price: 7.99, image: 'item3.jpg' },
          { id: 4, name: 'Item 4', price: 12.99, image: 'item4.jpg' },
          // Add more items here...
        ]);
      }, 1000);
    });
  };

  const handleAddToCart = (itemId) => {
    // Implement backend functionality to add the item to the cart
    console.log('Item added to cart:', itemId);
  };

  return (
    <div className="boxitems-page">
      <div className="boxitems-container">
        {items.map((item) => (
          <div key={item.id} className="boxitem">
            <img src={item.image} alt={item.name} />
            <div className="boxitem-details">
              <div className="boxitem-name">{item.name}</div>
              <div className="boxitem-price">${item.price.toFixed(2)}</div>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="shopping-sidenav">
        {/* Sidebar content (e.g., shopping cart, categories, filters, etc.) */}
        {/* Add backend functionality to update the cart and display its contents */}
      </div>
    </div>
  );
};

export default Boxitems;
