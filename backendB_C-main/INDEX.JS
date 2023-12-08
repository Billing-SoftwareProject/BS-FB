const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();


// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./Controllers/authRoutes');
const Invoices = require('./Controllers/Invoices');
const dbRoutes = require('./Controllers/queries');

app.use('/api/auth', authRoutes);
app.use('/api/Bill', Invoices);
app.use('/api', dbRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});