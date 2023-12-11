import React, { useState } from 'react';
import QRCode from 'qrcode';
import './App.css';


function Code() {
  const [price, setPrice] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');

  const generateQRCode = async () => {
    try {
      const data = `Total Price: $${price}`;
      const qrCodeDataURL = await QRCode.toDataURL(data);
      setQRCodeData(qrCodeDataURL);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter the price"
      /><br/>
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeData && (
        <div>
          <img src={qrCodeData} alt="QR Code" />
        </div>
      )}
    </div>
  )
}

export default Code