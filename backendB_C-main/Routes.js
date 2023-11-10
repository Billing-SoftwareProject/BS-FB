const express = require('express');
const app = express();


const {
    createTables,
    getItems,
    getItemsById,
    createItems,
    updateItems,
    deleteItems,
  } = require('./actions/queries');

app.post('/create-tables', async (req, res) => {
    try {
      const result = await createTables();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error creating tables' });
    }
  });
  
  app.get('/get-items', async (req, res) => {
    try {
      const results = await getItems();
      res.json({ products: results });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' });
    }
  });
  
  app.get('/get-items/:name', async (req, res) => {
    const productName = req.params.name;
    try {
      const results = await getItemsById(productName);
      res.json({ products: results });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products by name' });
    }
  });
  
  app.post('/create-items', async (req, res) => {
    const newProduct = req.body;
    try {
      const result = await createItems(newProduct);
      res.json(result);
    } catch (error) {
      if (error.error === 'Duplicate product name. Product names must be unique.') {
        res.status(400).json(error);
      } else {
        res.status(500).json({ error: 'Error inserting product' });
      }
    }
  });
  
  app.put('/update-items/:name', async (req, res) => {
    const productName = req.params.name;
    const updatedProductData = req.body;
    try {
      const result = await updateItems(productName, updatedProductData);
      res.json(result);
    } catch (error) {
      if (error.error === `Product with name "${productName}" not found`) {
        res.status(404).json(error);
      } else {
        res.status(500).json({ error: 'Error updating product' });
      }
    }
  });
  
  app.delete('/delete-items/:name', async (req, res) => {
    const productName = req.params.name;
    try {
      const result = await deleteItems(productName);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting product' });
    }
  });