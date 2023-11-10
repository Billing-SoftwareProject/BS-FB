import React, { useState } from 'react';
import './SearchPage.css';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [inventoryItems, setInventoryItems] = useState([]);
  const [recentlyAddedItems, setRecentlyAddedItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');
  const [newItemUnit, setNewItemUnit] = useState('');
  const [newItemImage, setNewItemImage] = useState('');

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const results = inventoryItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    
  };

  const handleAddNewItem = () => {
    const newItem = {
      id: recentlyAddedItems.length + 1,
      name: newItemName,
      price: newItemPrice,
      quantity: newItemQuantity,
      unit: newItemUnit,
      image: newItemImage,
    };

    setRecentlyAddedItems([newItem, ...recentlyAddedItems]);
    setInventoryItems([newItem, ...inventoryItems]);
    setNewItemName('');
    setNewItemPrice('');
    setNewItemQuantity('');
    setNewItemUnit('');
    setNewItemImage('');
  };

  return (
    <div className="search-page">
      <div className="inventory">
        <h3>Inventory</h3>
        <ul>
          {inventoryItems.map((item) => (
            <li key={item.id}>
              <div className="item-details">
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price}</div>
                <div className="item-quantity">
                  Quantity: {item.quantity} {item.unit}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-container">
        <h2>Search Items</h2>
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            placeholder="Enter search query"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="search-results">
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((item) => (
                <li key={item.id}>
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">{item.price}</div>
                    <div className="item-quantity">
                      Quantity: {item.quantity} {item.unit}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="not-found">No search results found.</p>
          )}
        </div>
      </div>
      <div className="recently-added-items">
        <h3>Recently Added Items</h3>
        <ul>
          {recentlyAddedItems.map((item) => (
            <li key={item.id}>
              <div className="recently-added-item">
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">{item.price}</div>
                  <div className="item-quantity">
                    Quantity: {item.quantity} {item.unit}
                  </div>
                </div>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        {recentlyAddedItems.length > 5 && (
          <button onClick={() => setRecentlyAddedItems(inventoryItems)}>
            View All
          </button>
        )}
      </div>
      <div className="add-new-item-form">
        <h3>Add New Item</h3>
        <div className="form-group">
          <label htmlFor="newItemName">Name:</label>
          <input
            type="text"
            id="newItemName"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="newItemPrice">Price:</label>
          <input
            type="text"
            id="newItemPrice"
            value={newItemPrice}
            onChange={(e) => setNewItemPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="newItemQuantity">Quantity:</label>
          <input
            type="text"
            id="newItemQuantity"
            value={newItemQuantity}
            onChange={(e) => setNewItemQuantity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="newItemUnit">Unit:</label>
          <select
            id="newItemUnit"
            value={newItemUnit}
            onChange={(e) => setNewItemUnit(e.target.value)}
          >
            <option value="">Select Unit</option>
            <option value="kg">kg</option>
            <option value="gram">gram</option>
            <option value="pack">pack</option>
            <option value="dozen">dozen</option>
            <option value="units">units</option>
            <option value="tons">tons</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="newItemImage">Image URL:</label>
          <input
            type="text"
            id="newItemImage"
            value={newItemImage}
            onChange={(e) => setNewItemImage(e.target.value)}
          />
        </div>
        <button onClick={handleAddNewItem}>Add Item</button>
      </div>
    </div>
  );
};

export default SearchPage;
