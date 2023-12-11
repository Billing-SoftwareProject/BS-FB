import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Product/QuickAdd.css";
import Rasgulla from "C:/Users/Vishal/Downloads/Merge-BS/src/images/default-2.jpg";
import SearchBar from "C:/Users/Vishal/Downloads/Merge-BS/src/BB-components/Bars/SearchBar.js";

const QuickAddPage = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [suggestedItems, setSuggestedItems] = useState([]);

  const [sortingCriteria, setSortingCriteria] = useState("relevance");

  const sortItems = (criteria) => {
    const itemsCopy = [...dummyItems];

    if (criteria === "relevance") {
      // No sorting is needed for relevance
    } else if (criteria === "lowToHigh") {
      itemsCopy.sort((a, b) => a.price - b.price);
    } else if (criteria === "highToLow") {
      itemsCopy.sort((a, b) => b.price - a.price);
    } else if (criteria === "latest") {
      itemsCopy.sort((a, b) => b.id - a.id);
    }

    return itemsCopy;
  };

  // Event handler for changing the sorting criteria
  const handleSortChange = (event) => {
    setSortingCriteria(event.target.value);
  };

  // Dummy items data (keep only three rows)
  const dummyItems = [
    {
      id: 1,
      name: "Item 1",
      price: 12.99,
      image: "item1.jpg",
    },
    {
      id: 2,
      name: "Item 2",
      price: 15.99,
      image: "item2.jpg",
    },
    {
      id: 3,
      name: "Item 3",
      price: 7.99,
      image: "item3.jpg",
    },
    {
      id: 1,
      name: "Item 1",
      price: 12.99,
      image: "item1.jpg",
    },
    {
      id: 2,
      name: "Item 2",
      price: 15.99,
      image: "item2.jpg",
    },
    {
      id: 3,
      name: "Item 3",
      price: 7.99,
      image: "item3.jpg",
    },
    {
      id: 1,
      name: "Item 1",
      price: 12.99,
      image: "item1.jpg",
    },
    {
      id: 2,
      name: "Item 2",
      price: 15.99,
      image: "item2.jpg",
    },
    {
      id: 3,
      name: "Item 3",
      price: 7.99,
      image: "item3.jpg",
    },
    {
      id: 1,
      name: "Item 1",
      price: 12.99,
      image: "item1.jpg",
    },
    {
      id: 2,
      name: "Item 2",
      price: 15.99,
      image: "item2.jpg",
    },
    {
      id: 3,
      name: "Item 3",
      price: 7.99,
      image: "item3.jpg",
    },
    {
      id: 1,
      name: "Item 1",
      price: 12.99,
      image: "item1.jpg",
    },
    {
      id: 2,
      name: "Item 2",
      price: 15.99,
      image: "item2.jpg",
    },
    {
      id: 3,
      name: "Item 3",
      price: 7.99,
      image: "item3.jpg",
    },
    // Add more items as needed
  ];

  const handleItemNameChange = (event) => {
    const value = event.target.value;
    setItemName(value);

    // Filter dummy items based on input value
    const filteredItems = dummyItems.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestedItems(filteredItems);
  };

  const handleAddItem = () => {
    // Add your logic for adding items here
  };

  return (
    <div className="Quick-container">
      <h1>Quick Add</h1>
      <div className="QuickSearch">
        <SearchBar />
        <div className="sorting-dropdown">
          <select value={sortingCriteria} onChange={handleSortChange}>
            <option value="relevance">Relevance</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="latest">Latest</option>
          </select>
        </div>
      </div>
      <div className="dummy-items-container">
        <div className="dummy-items">
          {sortItems(sortingCriteria).map((item, index) => (
            <div key={item.id} className="dummy-item">
              <img src={Rasgulla} alt={item.name} />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>Price: ₹{item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAddPage;
