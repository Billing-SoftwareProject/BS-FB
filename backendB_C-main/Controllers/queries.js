const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const pool = require('../connection'); 
const verifyToken = require('../middleware'); 

// Route: Get all items for the logged-in user
router.get('/Items', verifyToken, async (req, res) => {
  try {
    
    const { VendorID } = req.user;
    const selectQuery = 'SELECT * FROM Products WHERE VendorID = ?';
    const connection = await pool.getConnection();
    const [results] = await connection.execute(selectQuery, [VendorID]);
    connection.release();
    console.log('Products fetched successfully:', results);
    res.status(200).json({ products: results });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});

  

router.get('/Items/:Name', verifyToken, async (req, res) => {
  try {

      const productName = req.params.Name;
      const { VendorID } = req.user;
      const selectQuery = 'SELECT * FROM Products WHERE VendorID = ? AND ProductName LIKE ?';
      const [results] = await pool.query(selectQuery, [VendorID, `%${productName}%`]);

      if (results.length === 0) {
          return res.status(404).json({ error: `Product with name "${productName}" not found for the given VendorID` });
      }
      console.log(`Products with name "${productName}" fetched successfully for VendorID ${VendorID}:`, results);
      res.json({ products: results }); 
  } catch (error) {
      console.error('Error fetching products by name and VendorID:', error);
      res.status(500).json({ error: 'Error fetching products by name and VendorID' });
  }
});

// Route: Create a new item
router.post('/Items', verifyToken, async (req, res) => {
  try {
    const { VendorID } = req.user; 
    const newProduct = { ...req.body, VendorID }; 
    const insertQuery = 'INSERT INTO Products SET ?';
    const [results] = await pool.query(insertQuery, newProduct);

    console.log('Product added successfully:', results);
    res.status(200).json({ message: 'Item created successfully' });
  } catch (error) {
    console.error('Error inserting product:', error);

    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ error: 'Duplicate product name. Product names must be unique.' });
    } else {
      res.status(500).json({ error: 'Error inserting product' });
    }
  }
});

// Route: Update item by Name
router.put('/Items/:Name', verifyToken, async (req, res) => {
  try {

   const productName = req.params.Name;
 
   const updatedProductData = req.body;
   const updateQuery = 'UPDATE Product SET ? WHERE Product = ?';

   pool.query(updateQuery, [updatedProductData, productName], (error, results, fields) => {
     if (error) {
       console.error('Error updating product:', error);
       res.status(500).json({ error: 'Error updating product' });
     } else if (results.affectedRows === 0) {

       res.status(404).json({ error: `Product with name "${productName}" not found` });
     } else {
       console.log(`Product with name "${productName}" updated successfully:`, results);
       res.json({ message: `Product with name "${productName}" updated successfully` });
     }
   });
    res.status(200).json({ message: 'Item updated successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});

// Route: Delete item by Name
router.delete('/Items/:Name', verifyToken, async (req, res) => {
  try {
    const productName = req.params.Name;
    const { VendorID } = req.user;
  

    const deleteQuery = 'DELETE FROM Products WHERE VendorID = ? AND ProductName LIKE ?';
  
    
    pool.query(deleteQuery,[VendorID, `%${productName}%`], (error, results, fields) => {
      if (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Error deleting product' });
      } else {
        console.log(`Product with ID ${productName} deleted successfully`);
        res.json({ message: `Product with ID ${productName} deleted successfully` });
      }
    });
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});

// Export the router
module.exports = router;
