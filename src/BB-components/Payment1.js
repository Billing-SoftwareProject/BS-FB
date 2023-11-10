import React, { useState } from 'react';
import '../BB-css/Payment1.css';
import Navbar from "../BB-components/Navbar.js";

const Payments = () => {
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle payment option selection
  const handlePaymentOption = (option) => {
    setSelectedOption(option);
  };

  // Function to handle the payment process (simplified)
  const handlePayment = () => {
    // Here, you would typically integrate with a payment gateway like Stripe or Razorpay
    // and handle the actual payment processing.
    alert(`Payment by ${selectedOption} is successful!`);
  };

  return (
    <>
    <Navbar />
    <div className="payments-container">
      <h1>Choose a Payment Option</h1>
      <div className="payment-options">
        <div
          className={`payment-option ${selectedOption === 'Card' ? 'selected' : ''}`}
          onClick={() => handlePaymentOption('Card')}
        >
          <div className="payment-icon card-icon">💳</div>
          <div className="payment-label">Credit/Debit Card</div>
        </div>
        <div
          className={`payment-option ${selectedOption === 'UPI' ? 'selected' : ''}`}
          onClick={() => handlePaymentOption('UPI')}
        >
          <div className="payment-icon upi-icon">💸</div>
          <div className="payment-label">UPI</div>
        </div>
        <div
          className={`payment-option ${selectedOption === 'NetBanking' ? 'selected' : ''}`}
          onClick={() => handlePaymentOption('NetBanking')}
        >
          <div className="payment-icon netbanking-icon">🏦</div>
          <div className="payment-label">Net Banking</div>
        </div>
      </div>
      <button className="pay-button" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
    </>
  );
};

export default Payments;