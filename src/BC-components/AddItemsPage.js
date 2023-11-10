import React, { useState, useEffect } from "react";
import "../BC-css/AddItemsPage.css";
import Rasgulla from "../images/default-2.jpg";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import QuickAddPage from "./QuickAdd";
import SearchBar from "../BB-components/SearchBar";

// Dummy data for items
// const items = [
//   {
//     id: 1,
//     name: "sweet",
//     price: 10.99,
//     Qyuantity : 10,
//     image: "item1.jpg",
//   },
//   {
//     id: 2,
//     name: "rasgulla",
//     price: 15.99,
//     Qyuantity : 10,
//     image: "item2.jpg",
//   },
//   {
//     id: 3,
//     name: "jamun",
//     price: 7.99,
//     Qyuantity : 10,
//     image: "item3.jpg",
//   },
//   {
//     id: 4,
//     name: "sweet",
//     price: 10.99,
//     Qyuantity : 10,
//     image: "item1.jpg",
//   },
//   {
//     id: 5,
//     name: "rasgulla",
//     price: 15.99,
//     Qyuantity : 10,
//     image: "item2.jpg",
//   },
//   {
//     id: 6,
//     name: "jamun",
//     price: 7.99,
//     Qyuantity : 10,
//     image: "item3.jpg",
//   },
//   {
//     id: 7,
//     name: "jamun",
//     price: 7.99,
//     Qyuantity : 10,
//     image: "item3.jpg",
//   },
//   // Add more items as needed
// ];

const AddItemsPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  // Fetch product data from the API endpoint
  // Fetch product data from the API endpoint
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Items") // Replace with your actual API endpoint
      .then((response) => {
        // Ensure that response.data.products is an array
        if (Array.isArray(response.data.products)) {
          setItems(response.data.products); // Set items to the array of products
        } else {
          console.error("Invalid data received from the API");
        }
      })
      .catch((error) => {
        console.error("Error fetching product data: " + error);
      });
  }, []);

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    }
  };
  const removeFromCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
      setCart([...cart, { ...item, quantity: -1 }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalQuantity = cart.reduce(
    (item) => item.quantity,
    0
  );

  const handleCartClick = () => {
    navigate("/cart", { state: cart });
  };

  return (
    <>
      <div class="topnav">
        <SearchBar />
      </div>
      {/* <hr className="AddHr" /> */}
      <div className="scrollmenu">
        <a href="#home">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#news">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#contact">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#about">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#support">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#blog">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#tools">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#base">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#custom">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#more">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#logo">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#friends">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#partners">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#people">
          <img src={Rasgulla} alt="" />
        </a>
        <a href="#work">
          <img src={Rasgulla} alt="" />
        </a>
      </div>

      <div className="itemlist-page">
        <div className="shopping-sidenav">
          <SideBar />
        </div>
        <div className="itemlist-container">
          {items.map((item) => (
            <div key={item.id} className="itemlist-item">
              <img
                src={Rasgulla}
                alt={item.ProductName}
                onClick={() => addToCart(item)}
              />
              <div className="itemlist-item-details">
                <div className="itemlist-item-name">{item.ProductName}</div>
                <div className="itemlist-item-price">
                  ₹{item.price}
                </div>
                <div className="itemlist-item-quantity">
                  Qty: {item.Quantity} kg
                </div>
              </div>
              {/* <i className="fa-light fa-circle-plus" /> */}
              <button className="CartAdjusting" onClick={() => addToCart(item)}> + </button>
              {/* <p>({totalQuantity})</p> */}
              <button className="CartAdjusting" onClick={() => removeFromCart(item)} > - </button>
            </div>
          ))}
        </div>
      </div>

      <button className="cart" onClick={handleCartClick}>
      <span className="material-icons-outlined">shopping_cart</span> ({totalItemsInCart})
      </button>
    </>
  );
};

export default AddItemsPage;
