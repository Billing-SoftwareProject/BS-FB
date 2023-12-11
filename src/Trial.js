import React, { useState } from 'react';
import './trial.css';

const Trial = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    // Perform logic to add the item
    console.log('Item added!');
    console.log('Item Name:', itemName);
    console.log('Item Price:', itemPrice);
    console.log('Item Description:', itemDescription);
    // Reset form fields
    setItemName('');
    setItemPrice('');
    setItemDescription('');
  };

  return (
    <div className="container">
      <div className="section category">
        <h2>Category</h2>
        <ul>
          <li>
            <a href="/">Profile</a>
          </li>
          <li>
            <a href="/">Account Settings</a>
          </li>
          <li>
            <a href="/">Notifications</a>
          </li>
          <li>
            <a href="/">Messages</a>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
      <div className="section add-item">
        <h2>Add Item</h2>
        <form onSubmit={handleAddItem}>
          <div className="form-input">
            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} />
          </div>
          <div className="form-input">
            <label htmlFor="itemPrice">Item Price:</label>
            <input type="text" id="itemPrice" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
          </div>
          <div className="form-input">
            <label htmlFor="itemDescription">Item Description:</label>
            <textarea id="itemDescription" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} />
          </div>
          <button type="submit" className="add-button">Add</button>
        </form>
      </div>
      <div className="section recent-items">
        <h2>Recent Items</h2>
        {/* Recent items content */}
      </div>
    </div>
  );
};

export default Trial;