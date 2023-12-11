import React from "react";
import "../Other/shoppingCartPage.css"; // Import the CSS file

const ShoppingCartPage = () => {
  // Dummy data for items in the cart

  const itemsInCart = [
    {
      id: 1,
      name: "Item 1",
      price: 10.99,
      image: "item1.jpg",
      link: "item1-details",
    },
    {
      id: 2,
      name: "Item 2",
      price: 15.99,
      image: "item2.jpg",
      link: "item2-details",
    },
    {
      id: 3,
      name: "Item 3",
      price: 7.99,
      image: "item3.jpg",
      link: "item3-details",
    },
    {
      id: 4,
      name: "Item 4",
      price: 12.99,
      image: "item4.jpg",
      link: "item4-details",
    },
    {
      id: 5,
      name: "Item 5",
      price: 8.99,
      image: "item5.jpg",
      link: "item5-details",
    },
    {
      id: 6,
      name: "Item 6",
      price: 9.99,
      image: "item6.jpg",
      link: "item6-details",
    },
    {
      id: 7,
      name: "Item 7",
      price: 14.99,
      image: "item7.jpg",
      link: "item7-details",
    },
    {
      id: 8,
      name: "Item 8",
      price: 11.99,
      image: "item8.jpg",
      link: "item8-details",
    },
  ];

  /*const handleGenerateBill = () => {
    // Perform bill generation logic here
    // You can navigate to a new page or display a modal with the generated bill
    console.log("Bill generated!");
  };*/

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
      <div className="shopping-cart-container">
        <div className="cart-header">
          <button className="cart-button top-button">Items</button>
          {/* Remove the following button */}
          {/* <button className="cart-button top-button">Add items</button> */}
        </div>
        {itemsInCart.length > 0 ? (
          <div className="cart-items">
            {itemsInCart.map((item) => (
              <div key={item.id} className="cart-item card ios-like-card">
                <img className="item-image" src={item.image} alt={item.name} />
                <div className="item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">${item.price.toFixed(2)}</div>
                  <a className="item-link" href={item.link}>
                    &#10148;
                  </a>
                </div>
                <div className="item-description">
                  This is a description of the item.
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-cart-message">Your shopping cart is empty.</p>
        )}
        {/* Remove the following form */}
        {/* <div className="add-new-item-form card">
          <h2>Add New Item</h2>
          <form onSubmit={handleAddItem}>
            <div className="form-input">
              <label htmlFor="newItemName">Item Name:</label>
              <input
                type="text"
                id="newItemName"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="newItemPrice">Item Price:</label>
              <input
                type="text"
                id="newItemPrice"
                value={newItemPrice}
                onChange={(e) => setNewItemPrice(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="newItemImage">Item Image URL:</label>
              <input
                type="text"
                id="newItemImage"
                value={newItemImage}
                onChange={(e) => setNewItemImage(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="newItemLink">Item Link:</label>
              <input
                type="text"
                id="newItemLink"
                value={newItemLink}
                onChange={(e) => setNewItemLink(e.target.value)}
              />
            </div>
            <button type="submit" className="add-button ios-like-button">
              {newItemName ? "Update Item" : "Add Item"}
            </button>
          </form>
        </div> */}
      </div>
      <div className="section-recent-items">
        <h2>Recent Items</h2>
        {/* Recent items content */}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
