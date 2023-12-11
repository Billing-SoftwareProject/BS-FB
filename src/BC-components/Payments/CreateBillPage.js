import React, { useState } from 'react';

export const CreateBillPage = () => {

  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: '$10', quantity: 1 },
    { id: 2, name: 'Item 2', price: '$20', quantity: 1 },
    { id: 3, name: 'Item 3', price: '$30', quantity: 1 },
  ]);


  const [paymentOption, setPaymentOption] = useState('');
  const [showUPIOptions, setShowUPIOptions] = useState(false);
  const [selectedUPIOption, setSelectedUPIOption] = useState('');
  const [upiId, setUpiId] = useState('');

  const handlePaymentOptionChange = (e) => {
    const selectedOption = e.target.value;
    setPaymentOption(selectedOption);
    setShowUPIOptions(selectedOption === 'upi');
  };

  const handleUPIOptionChange = (e) => {
    const selectedUPIOption = e.target.value;
    setSelectedUPIOption(selectedUPIOption);
  };

  const handleUPIIdChange = (e) => {
    const enteredUPIId = e.target.value;
    setUpiId(enteredUPIId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment based on the selected payment option
    // and the entered UPI ID (if applicable)
  };

  return (
    <div>
      <div className="main-content">
        <h2>Payment Method</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" required />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" required />
          </div>
          <div className="form-group">
            <label htmlFor="paymentOption">Payment Option:</label>
            <select
              id="paymentOption"
              value={paymentOption}
              onChange={handlePaymentOptionChange}
              required
            >
              <option value="">Select</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="cash">Cash</option>
            </select>
          </div>
          {showUPIOptions && (
            <div className="upi-options">
              <h3>UPI Options</h3>
              <div className="form-group">
                <label htmlFor="upiIdOption">Select UPI Option:</label>
                <select id="upiIdOption" onChange={handleUPIOptionChange} required>
                  <option value="">Select</option>
                  <option value="gpay">Google Pay</option>
                  <option value="phonepe">PhonePe</option>
                </select>
              </div>
              {selectedUPIOption && (
                <div className="qr-code">
                  <h4>{selectedUPIOption === 'gpay' ? 'Google Pay' : 'PhonePe'} QR Code</h4>
                  <img
                    src={
                      selectedUPIOption === 'gpay'
                        ? 'gpay-qr.png'
                        : 'phonepe-qr.png'
                    }
                    alt={selectedUPIOption === 'gpay' ? 'Google Pay QR Code' : 'PhonePe QR Code'}
                  />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="upiId">Enter UPI ID:</label>
                <input
                  type="text"
                  id="upiId"
                  value={upiId}
                  onChange={handleUPIIdChange}
                  required
                />
              </div>
            </div>
          )}
          {paymentOption === 'cash' && (
            <div className="cash-payment">
              <h3>Cash Payment</h3>
              <p>Please keep the exact amount ready for payment.</p>
            </div>
          )}
          <button type="submit">Pay ${items.reduce((total, item) => total + (Number(item.price.replace('$', '')) * item.quantity), 0)}</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBillPage;
