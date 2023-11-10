import React, { useState, useRef } from "react";
import "../BB-css/inventory.css";
import Navbar from "../BB-components/Navbar.js";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    quantity: "",
    unit: "",
    image: null,
    price: "",
    type: "",
  });
  const [cameraAccess, setCameraAccess] = useState(false);
  const fileInputRef = useRef(null);

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewItem({ ...newItem, image: URL.createObjectURL(file) });
    }
  };

  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraAccess(true);

      const videoElement = document.createElement("video");
      videoElement.srcObject = stream;
      videoElement.play();

      const canvasElement = document.createElement("canvas");
      canvasElement.width = 640;
      canvasElement.height = 480;

      videoElement.addEventListener("loadedmetadata", () => {
        canvasElement.getContext("2d").drawImage(videoElement, 0, 0, 640, 480);
        const capturedImage = canvasElement.toDataURL("image/jpeg");

        setNewItem({ ...newItem, image: capturedImage });
        stream.getTracks().forEach((track) => track.stop());
      });
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Unable to access the camera. Please check your permissions.");
    }
  };

  const handleAddNewItem = () => {
    if (validateNewItem(newItem)) {
      // Placeholder for backend data submission
      // You can use fetch or any other method to send data to the server
      console.log("Sending data to the server:", newItem);

      // Assuming the server responds with the saved item
      const savedItem = { ...newItem, id: Date.now() };
      setInventory([...inventory, savedItem]);

      setNewItem({
        name: "",
        description: "",
        quantity: "",
        unit: "",
        image: null,
        price: "",
        type: "",
      });
    } else {
      alert("Please fill in all required fields to add a new item.");
    }
  };

  const validateNewItem = (item) => {
    return (
      item.name &&
      item.description &&
      item.quantity &&
      item.unit &&
      item.image &&
      item.price &&
      item.type
    );
  };

  return (
    <>
      <Navbar />
      <div className="inventory-page">
        <div className="main-content">
          <div className="add-item">
            <h2>Add New Item</h2>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Item Name"
                value={newItem.name}
                onChange={handleNewItemChange}
                required
              />
              <input
                type="text"
                name="description"
                placeholder="Item Description"
                value={newItem.description}
                onChange={handleNewItemChange}
                required
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={newItem.quantity}
                onChange={handleNewItemChange}
                required
              />
              <select
                name="unit"
                value={newItem.unit}
                onChange={handleNewItemChange}
                required
              >
                <option value="">Select Unit</option>
                <option value="litre">Litre</option>
                <option value="gm">Gram</option>
                <option value="kilo">Kilo</option>
                <option value="packets">Packets</option>
                {/* Add more options as needed */}
              </select>
              <div className="image-input">
                <label htmlFor="image">Add Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  id="image"
                  ref={fileInputRef}
                  onChange={handleImageInputChange}
                />
                {!cameraAccess && (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="btn-choose"
                  >
                    Choose from Device
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleOpenCamera}
                  className="btn-camera"
                >
                  Open Camera
                </button>
              </div>
              {newItem.image && (
                <img
                  src={newItem.image}
                  alt="Item Preview"
                  className="image-preview"
                />
              )}
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newItem.price}
                onChange={handleNewItemChange}
                required
              />
              <input
                type="text"
                name="type"
                placeholder="Item Type"
                value={newItem.type}
                onChange={handleNewItemChange}
                required
              />
              <button
                type="button"
                onClick={handleAddNewItem}
                className="btn-add"
              >
                Add Item
              </button>
            </form>
          </div>

          <div className="inventory-items">
            {inventory.map((item, index) => (
              <div className="inventory-card" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>
                    Quantity: {item.quantity} {item.unit}
                  </p>
                  <p>Price: ${item.price}</p>
                  <p>Type: {item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
