const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../connection');

const JWT_SECRET = 'YourSecretKey'; // Change this to your secret key

// Route: Register a new user using: POST "/api/auth/signup" no login required
router.post(
  '/signup',
  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password is too short').isLength({ min: 4 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, password } = req.body;

      // Check if the user with the same email already exists
      const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

      if (existingUser.length > 0) {
        return res.status(400).json({ error: 'Sorry, user already exists' });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert the new user into the users table
      await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [
        name,
        email,
        hashedPassword,
      ]);

      // Create a JWT token
      const data = {
        user: {
          email,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '12h' });

       res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Some error occurred');
    }
  }
);

// Export the router
module.exports = router;
