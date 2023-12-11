import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

import Landing from "./Landing.js";

// BC-components
import SignupPage from "../src/BC-components/Authentication/SignupPage.js";
// import Navbar from "./BC-components/Navbar";
import ShoppingCartPage from "../src/BC-components/Other/ShoppingCartPage.js";
import LoginPage from "../src/BC-components/Authentication/LoginPage.js";
import PaymentsPage from "../src/BC-components/Payments/PaymentsPage.js";
import Pay from "../src/BC-components/Payments/Pay.js";
import SearchPage from "./BC-components/Bars/SearchPage.js";
import AddItemsPage from "./BC-components/Product/AddItemsPage.js";
import CreateBillPage from "./BC-components/Payments/CreateBillPage.js";
import Code from "./Code";
import Revenue from "./BC-components/SellAnalysis/Revenue.js";

// BB-components
import LandingPage from "./BB-components/Home/LandingPage.js";
import Home from "./BB-components/Home/Home.js";
import AddExtra from "./BB-components/Inventory/AddExtra";
import Inventory from "./BB-components/Inventory/Inventory.js";
// import Navbar from "./BB-components/Navbar.js";
import Selling from "./BB-components/Sellings/Selling.js";
import SellingStats from "./BB-components/Sellings/SellingStats.js";
import TransactionDetails from "./BB-components/Transactions/TransactionDetails.js";
import TransactionHistory from "./BB-components/Transactions/TransactionHistory.js";
import Subscription from "./BB-components/Renew/Subscription.js";
import Payments from "./BB-components/Payments/Payment1.js";
import SearchBar from "./BB-components/Bars/SearchBar.js";

const App = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]); // Initialize cart as an empty array

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
    // Implement your removeFromCart logic here
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* Landing */}
        <Route exact path="/Landing" element={<Landing />} />

        {/* BC-routing */}
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/items" element={<ShoppingCartPage />} />
        <Route
          path="/Additems"
          element={<AddItemsPage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<PaymentsPage removeFromCart={removeFromCart} />}
        />
        <Route path="/bill" element={<CreateBillPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/code" element={<Code />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="/Revenue" element={<Revenue />} />

        {/* BB-routings */}
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/SellingStats" element={<SellingStats />} />
        <Route
          exact
          path="/TransactionHistory"
          element={<TransactionHistory />}
        />
        <Route
          exact
          path="/TransactionDetails"
          element={<TransactionDetails />}
        />
        <Route path="/AddExtra" element={<AddExtra />} />
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/Payment" element={<Payments />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/SearchBar" element={<SearchBar />} />
      </Routes>
    </>
  );
};

export default App;
