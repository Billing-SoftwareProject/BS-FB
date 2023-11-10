import '../BB-css/SellingStats.css';
import Navbar from "../BB-components/Navbar.js";

// SellingStats.js
import React, { useState } from 'react';
// import './SellingStats.css';

const SellingStats = () => {
  // Dummy data for top-selling items per month
  const topSellingItemsPerMonth = [
    {
      month: 'January',
      items: [
        { id: 1, name: 'Product A', sales: 150, price: 20 },
        { id: 2, name: 'Product B', sales: 120, price: 30 },
        // Add more items for January
      ],
    },
    {
      month: 'February',
      items: [
        { id: 3, name: 'Product C', sales: 100, price: 25 },
        { id: 4, name: 'Product D', sales: 90, price: 15 },
        // Add more items for February
      ],
    },
    // Add data for other months
  ];

  const months = topSellingItemsPerMonth.map((data) => data.month);
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [showFullDetails, setShowFullDetails] = useState(false);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setShowFullDetails(false); // Reset to show limited details
  };

  const getTopSellingItemsForMonth = () => {
    const selectedData = topSellingItemsPerMonth.find(
      (data) => data.month === selectedMonth
    );
    return selectedData ? selectedData.items.slice(0, 10) : [];
  };

  const handleShowFullDetails = () => {
    setShowFullDetails(true);
  };

  // Dummy data for top-selling items annually
  const topSellingItemsAnnually = [
    { id: 1, name: 'Annual Product 1', sales: 500, price: 10 },
    { id: 2, name: 'Annual Product 2', sales: 480, price: 15 },
    // Add more items for the annual list
  ];

  return (
    <>
    <Navbar />
    <div className="selling-stats-page">
      <h2>Top Selling Items</h2>
      <div className="month-selector">
        <label htmlFor="monthSelect">Select Month:</label>
        <select
          id="monthSelect"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      {showFullDetails ? (
        // Display full details of top-selling items for the selected month
        <table className="top-selling-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Total Sales</th>
              <th>Price</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {getTopSellingItemsForMonth().map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.sales}</td>
                <td>${item.price}</td>
                <td>${item.sales * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // Display limited details with a "Show Full Details" button
        <div className="limited-details">
          <table className="top-selling-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {getTopSellingItemsForMonth().map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="show-full-details-button">
            <button onClick={handleShowFullDetails}>Show Full Details</button>
          </div>
        </div>
      )}
      {topSellingItemsAnnually.length > 0 && (
        <div className="annually-top-selling">
          <h2>Top Selling Items Annually</h2>
          <table className="top-selling-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Total Sales</th>
                <th>Price</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {topSellingItemsAnnually.slice(0, 10).map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.sales}</td>
                  <td>${item.price}</td>
                  <td>${item.sales * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </>
  );
};

export default SellingStats;