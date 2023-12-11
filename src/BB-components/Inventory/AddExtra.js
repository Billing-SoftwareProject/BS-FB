import React, { useState, useEffect } from "react";
import Rasgulla from "C:/Users/Vishal/Downloads/Merge-BS/src/images/default-2.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBar from "../Bars/SearchBar";
import Navbar from "../Bars/Navbar.js";

import "../Inventory/AddExtra.css";

export const AddExtra = () => {

  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

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


  return (
    <>
    <Navbar />
    <div class="topnav">
        <SearchBar />
      </div>
      <div className="itemlist-container">
          {items.map((item) => (
            <div key={item.id} className="itemlist-item">
              <img
                src={Rasgulla}
                alt={item.ProductName}
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
            </div>
          ))}
        </div>
    </>
  )
}

export default AddExtra;