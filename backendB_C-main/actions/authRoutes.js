const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../connection');

const JWT_SECRET = 'YourSecretKey'; // Change this to your secret key

// Route: Authenticate a user using: POST "/api/auth/login" no login required
router.post(
  '/login',
  [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      // Check if the user with the provided email exists
      const [user] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

      if (user.length === 0) {
        return res.status(400).json({ error: 'Please login with correct credentials' });
      }

      // Compare the provided password with the hashed password
      const passwordCompare = await bcrypt.compare(password, user[0].password);

      if (!passwordCompare) {
        return res.status(400).json({ error: 'Please login with correct credentials' });
      }

      // Create a JWT token
      const data = {
        user: {
          email: user[0].email,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '12h' });

      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal server error');
    }
  }
);

// Export the router
module.exports = router;
