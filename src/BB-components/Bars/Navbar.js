import React from "react";
import "../Bars/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <a href="/Home">Home</a>
        <a href="/Inventory">Inventory</a>
        <a href="/SellingStats">Top Selling</a>
        <a href="/TransactionHistory">Transaction history</a>
        <a href="/Transactiondetails">Transactiondetails</a>
        <a href="/addextra">Addextra</a>
        <a href="/Subscription">Subscription</a>
        <a href="/Payment">Payment</a>
        {/* <a href="/SearchBar">Search</a> */}
      </div>
    </>
  );
};

export default Navbar;
