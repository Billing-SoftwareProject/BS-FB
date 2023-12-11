import React, { useState, useEffect } from "react";
import axios from "axios";
import "../SellAnalysis/Revenue.css";

const Revenue = () => {
  const [invoiceHistory, setInvoiceHistory] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    // Fetch invoice history data from the backend
    axios
      .get("http://localhost:8000/api/invoices") // Replace with your actual API endpoint
      .then((response) => {
        // Ensure that response.data.invoiceHistory is an array
        if (Array.isArray(response.data.invoiceHistory)) {
          setInvoiceHistory(response.data.invoiceHistory);
        } else {
          console.error("Invalid data received from the API");
        }
      })
      .catch((error) => {
        console.error("Error fetching invoice history data: " + error);
      });
  }, []);

  const handleInvoiceClick = (invoice) => {
    // Set the selected invoice when clicked
    setSelectedInvoice(invoice);
  };

  return (
    <div className="HistoryList">
      <h2>Invoice History</h2>
      <ul>
        {invoiceHistory.map((invoice) => (
          <li key={invoice.invoiceNumber} onClick={() => handleInvoiceClick(invoice)}>
            Invoice Number: {invoice.invoiceNumber}, Date: {invoice.invoiceDate}, Customer Name: {invoice.customerName}
          </li>
        ))}
      </ul>

      {/* Detailed information of the selected invoice */}
      {selectedInvoice && (
        <div className="HistoryListItem">
          <h3>Selected Invoice Details</h3>
          <p>Invoice Number: {selectedInvoice.invoiceNumber}</p>
          <p>Invoice Date: {selectedInvoice.invoiceDate}</p>
          <p>Customer Name: {selectedInvoice.customerName}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default Revenue;
