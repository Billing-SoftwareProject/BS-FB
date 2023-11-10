const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require('dotenv').config();
const cors = require('cors');
app.use(cors());

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./actions/authRoutes');
const signupRoutes = require('./actions/signupRoutes');
const dbRoutes = require('./actions/queries');

app.use('/api/auth', authRoutes);
app.use('/api/auth', signupRoutes);
app.use('/api', dbRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});