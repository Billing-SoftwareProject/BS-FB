// TransactionDetails.js
import React from "react";
import "../BB-css/TransactionDetails.css";
import Navbar from "../BB-components/Navbar";

const TransactionDetails = ({ transaction }) => {
  return (
    <>
    <Navbar />
    <div className="transaction-details">
      <h3>Transaction Details</h3>
      <p><strong>Transaction ID:</strong> {transaction.id}</p>
      <p><strong>Sender Name:</strong> {transaction.senderName}</p>
      <p> <strong>Amount:</strong> {transaction.amount}</p>
      <p> <strong>Date:</strong> {transaction.date}</p>
    </div>
    </>
  );
};

export default TransactionDetails;
