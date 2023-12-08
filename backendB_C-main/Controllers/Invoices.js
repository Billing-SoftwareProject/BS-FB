const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../connection');
const verifyToken = require('../middleware'); // Import your authentication middleware.

const JWT_SECRET = 'YourSecretKey'; // Change this to your secret key

// Route: Create an invoice with details
router.post('/invoices', verifyToken, async (req, res) => {
    try {
      // Validate the request body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { VendorID } = req.user;
  
      // Extract data from the request body
      const { products} = req.body; // Assuming products is an array of product details
  
      // Generate a unique invoice ID based on the current date and time
      const invoice_id = generateInvoiceID(new Date());
  
      // Calculate total amount with GST for each product
      const productsWithTotal = products.map(product => {
        const gstAmount = (product.gst_percentage / 100) * product.subtotal;
        const total_with_gst = product.subtotal - product.discount + gstAmount;
        return { ...product, total_with_gst };
      });
  
      // Insert data into the 'invoices' table using async/await
      const insertQuery = 'INSERT INTO invoices (InvoiceNo, ProductName, Quantity, SubTotal, Discount, Total, PaymentStatus, DatePurchased, VendorID) VALUES ?';
  
      // Extracting values from the products array for the query
      const values = productsWithTotal.map(product => [
        invoice_id,
        product.product_name,
        product.quantity,
        product.subtotal,
        product.discount,
        product.total_with_gst,
        product.payment_status,
        product.datepurchased,
        VendorID,
      ]);
  
      // Execute the SQL query to insert the data using async/await and pool.query
      const [results] = await pool.query(insertQuery, [values]);
  
      if (results.affectedRows > 0) {
        // Successfully inserted the invoice with multiple products
        res.status(201).json({ message: 'Invoice created successfully' });
      } else {
        // Insert did not affect any rows (probably due to a constraint violation)
        res.status(400).json({ error: 'Failed to create invoice' });
      }
    } catch (error) {
      console.error('Error inserting invoice:', error);
  
      if (error.code === 'ER_DUP_ENTRY') {
        // Handle duplicate entry error
        res.status(400).json({ error: 'Duplicate invoice ID. Invoice IDs must be unique.' });
      } else {
        // Handle other errors
        res.status(500).json({ error: 'Error inserting invoice' });
      }
    }
  });
  
  // Function to generate a unique invoice ID based on the current date and time
  function generateInvoiceID(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
  }
  
  // Global error-handling middleware
  router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  });
  
  // Database query function with async/await
  function poolQuery(sql, values) {
    return new Promise((resolve, reject) => {
      pool.query(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  

  router.get('/Invoices', verifyToken, async (req, res) => {
    try {
      // Extract userID from the token
      const { VendorID } = req.user;
      // SQL query to fetch products for the specific user
      const selectQuery = 'SELECT * FROM Invoices WHERE VendorID = ?';
  
      // Get a connection from the pool
      const connection = await pool.getConnection();
  
      // Execute the SQL query with the userID parameter
      const [results] = await connection.execute(selectQuery, [VendorID]);
  
      // Release the connection back to the pool
      connection.release();
  
      console.log('Products fetched successfully:', results);
      res.status(200).json({ products: results });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal server error');
    }
  });
  
// Export the router
module.exports = router;
