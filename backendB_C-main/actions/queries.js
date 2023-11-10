const express = require('express');
const router = express.Router();
// const util = require('util');
const pool = require('../connection');
const verifyToken = require('../middleware');

// Import your pool connection here (not shown in your code snippet)

// Route: Create a new vendor
router.post('/create-vendor', verifyToken, async (req, res) => {
  try {
    const createVendorTable = `
    CREATE TABLE IF NOT EXISTS Vendor (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL
    );`;

  const createProductTable = `
    CREATE TABLE IF NOT EXISTS Product (
      id INT PRIMARY KEY AUTO_INCREMENT,
      Product VARCHAR(100) NOT NULL,
      product_id INT,
      Price INT,
      Quantity INT,
      FOREIGN KEY (product_id) REFERENCES Vendor(id)
    );`;

  // Execute the queries
  pool.query(createVendorTable, (err) => {
    if (err) {
      console.error('Error creating Vendor table:', err);
      res.status(500).json({ error: 'Error creating Vendor table' });
    } else {
      console.log('Vendor table created.');

      pool.query(createProductTable, (err) => {
        if (err) {
          console.error('Error creating Product table:', err);
          res.status(500).json({ error: 'Error creating Product table' });
        } else {
          console.log('Product table created.');
          res.json({ message: 'Tables created successfully' });
        }
      });
    }
  });
    res.status(200).json({ message: 'Vendor created successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});

function queryAsync(sql, values) {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Route: Get all items
router.get('/Items',  async (req, res) => {
  try {
    const selectQuery = 'SELECT * FROM Products';

    // Get a connection from the pool
    const connection = await pool.getConnection();

    // Execute the SQL query to fetch all products
    const [results] = await connection.execute(selectQuery);

    // Release the connection back to the pool
    connection.release();

    console.log('Products fetched successfully:', results);
    res.status(200).json({ products: results });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
});
  

// Route: Get item by Name
router.get('/Items/:Name', verifyToken, async (req, res) => {
    try {
      // Extract the product name from the URL parameters
      const productName = req.params.Name;
  
      // SQL query to select products with a specific name from the Product table
      const selectQuery = 'SELECT * FROM Product WHERE Product = ?';
  
      // Execute the SQL query to fetch products by name using async/await
      const [results] = await pool.query(selectQuery, [productName]);
  
      if (results.length === 0) {
        return res.status(404).json({ error: `Product with name "${productName}" not found` });
      }
  
      console.log(`Products with name "${productName}" fetched successfully:`, results);
      res.json({ products: results }); // Send the retrieved products as a JSON response
    } catch (error) {
      console.error('Error fetching products by name:', error);
      res.status(500).json({ error: 'Error fetching products by name' });
    }
  });
// Route: Create a new item
router.post('/Items', verifyToken, async (req, res) => {
    try {
      // Extract JSON data from the request body
      const newProduct = req.body;
  
      // SQL query to insert the new product data into the Product table
      const insertQuery = 'INSERT INTO Product SET ?';
  
      // Execute the SQL query to insert the data using async/await and pool.query
      const [results] = await pool.query(insertQuery, newProduct);
  
      console.log('Product added successfully:', results);
      res.status(200).json({ message: 'Item created successfully' });
    } catch (error) {
      console.error('Error inserting product:', error);
  
      if (error.code === 'ER_DUP_ENTRY') {
        // Handle duplicate entry error
        res.status(400).json({ error: 'Duplicate product name. Product names must be unique.' });
      } else {
        // Handle other errors
        res.status(500).json({ error: 'Error inserting product' });
      }
    }
  });
// Route: Update item by Name
router.put('/Items/:Name', verifyToken, async (req, res) => {
  try {
   // Extract the product name from the URL parameters
   const productName = req.params.Name;
  
   // Extract the updated product data from the request body
   const updatedProductData = req.body;
 
   // SQL query to update the product with a specific name in the Product table
   const updateQuery = 'UPDATE Product SET ? WHERE Product = ?';
 
   // Execute the SQL query to update the product
   pool.query(updateQuery, [updatedProductData, productName], (error, results, fields) => {
     if (error) {
       console.error('Error updating product:', error);
       res.status(500).json({ error: 'Error updating product' });
     } else if (results.affectedRows === 0) {
       // No rows were affected, indicating that the product doesn't exist
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
    const productId = req.params.Name;
  
    // SQL query to delete the product with a specific ID from the Product table
    const deleteQuery = 'DELETE FROM Product WHERE Product = ?';
  
    // Execute the SQL query to delete the product
    pool.query(deleteQuery, productId, (error, results, fields) => {
      if (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Error deleting product' });
      } else {
        console.log(`Product with ID ${productId} deleted successfully`);
        res.json({ message: `Product with ID ${productId} deleted successfully` });
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
