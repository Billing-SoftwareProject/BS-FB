import React, { useState } from "react";
import QRCode from "qrcode.react";
import { useLocation, useNavigate } from "react-router-dom";

import "../Payments/Pay.css"; // Import your CSS file
import Cash from "C:/Users/Vishal/Downloads/Merge-BS/src/images/cash.jpg";
// import Credit from "../images/credit.jpg";
// import Debit from "../images/debit.jpg";
import Qr from "C:/Users/Vishal/Downloads/Merge-BS/src/images/qr.jpg";
// import Upi from "../images/upi.jpg";
// C:/Users/Vishal/Downloads/Merge-BS/src/images/default-2.jpg

const PaymentPage = () => {
  const location = useLocation();
  // const { invoiceAmount } = location.state;

  const { invoiceAmount } = location.state || {};

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/Succeed");
  };

  const [showUPIOptions, setShowUPIOptions] = useState(false);
  const [selectedUPIOption, setSelectedUPIOption] = useState(null);

  const [showQRCode, setShowQRCode] = useState(false);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [changeAmount, setChangeAmount] = useState(0);

  const [showCashForm, setShowCashForm] = useState(false);

  const handleUPIPayment = () => {
    setShowUPIOptions(true);
    setShowQRCode(false);
    setShowCashForm(false);
  };

  const handleUPIOptionClick = (option) => {
    setSelectedUPIOption(option);
    setShowQRCode(false);
    setShowCashForm(false);
    // You can implement logic to show the input box for the selected option here.
  };

  const handleScanAndPay = () => {
    setShowUPIOptions(false);
    setShowQRCode(true);
    setShowCashForm(false);
  };

  const handleCreditCardPayment = () => {
    setShowUPIOptions(false);
    setShowQRCode(false);
    setShowCashForm(false);
    // Implement Credit Card payment logic
  };

  const handleDebitCardPayment = () => {
    setShowUPIOptions(false);
    setShowQRCode(false);
    setShowCashForm(false);
    // Implement Debit Card payment logic
  };

  const handleCashPayment = () => {
    setShowUPIOptions(false);
    setShowQRCode(false);
    setShowCashForm(true);
  };

  const handleReceivedAmountChange = (e) => {
    const amount = parseFloat(e.target.value);
    setReceivedAmount(isNaN(amount) ? 0 : amount);
  };

  const calculateChange = () => {
    setChangeAmount(receivedAmount - invoiceAmount);
  };

  return (
    <div className="payment-page">
      <h2>Payment Details</h2>
      {/* <p>Invoice Amount: ${(invoiceAmount || 0).toFixed(2)}</p> */}
      <p>Invoice Amount (From State): ₹{(invoiceAmount || 0).toFixed(2)}</p>

      <div className="payment-options">
        {/* <div className="payment-option" onClick={handleUPIPayment}>
          <img src={Upi} alt="UPI" />
          <p>UPI</p>
        </div> */}
        <div className="payment-option" onClick={handleScanAndPay}>
          <img src={Qr} alt="Scan and Pay" />
          <p>Scan and Pay</p>
        </div>
        {/* <div className="payment-option" onClick={handleCreditCardPayment}>
          <img src={Credit} alt="Credit Card" />
          <p>Credit Card</p>
        </div>
        <div className="payment-option" onClick={handleDebitCardPayment}>
          <img src={Debit} alt="Debit Card" />
          <p>Debit Card</p>
        </div> */}
        <div className="payment-option" onClick={handleCashPayment}>
          <img src={Cash} alt="Cash" />
          <p>Cash</p>
        </div>
      </div>

      {showUPIOptions && (
        <div className="upi-container">
          <p>Select a UPI option:</p>
          <button className="gpay" onClick={() => handleUPIOptionClick("Google Pay")}><img src="/src/images/google.jpg" alt=""></img></button>
          <button className="phone" onClick={() => handleUPIOptionClick("PhonePe")}><img src="/src/images/phonepay.jpg" alt=""></img></button>
          <button className="paytm" onClick={() => handleUPIOptionClick("Paytm")}><img src="/src/images/paytm.jpg" alt=""></img></button>
          {/* Add more UPI options as needed */}
          {selectedUPIOption && (
            <div className="upi-input">
              <p>Enter your {selectedUPIOption} UPI ID:</p>
              <input type="text" placeholder={`Enter ${selectedUPIOption} UPI ID`} />
            </div>
          )}
        </div>
      )}

      {showQRCode && (
        <div className="qr-code-container">
          <p>Scan the QR code to make a payment</p>
          <QRCode value={`Your invoice amount: ${invoiceAmount}`} />
        </div>
      )}

      {showCashForm && (
        <div className="cash-container">
          <p>Enter the received amount:</p>
          <input
            type="number"
            placeholder="Received Amount"
            value={receivedAmount}
            onChange={handleReceivedAmountChange}
          />
          <button onClick={calculateChange}>Calculate Change</button>
          <p>Change: ₹{(changeAmount || 0).toFixed(2)}</p>
        </div>
      )}

      <button className="cart" onClick={handleBack}>
        Print
      </button>
    </div>
  );
};

export default PaymentPage;
