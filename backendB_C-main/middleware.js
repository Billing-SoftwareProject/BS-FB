const jwt = require('jsonwebtoken');
const JWT_SECRET = 'YourSecretKey'; // Change this to your secret key

function verifyToken(req, res, next) {
  // Get the token from the request headers or query parameters
  const token = req.headers.authorization || req.query.token;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user; // Store the decoded user data in the request object
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
}

module.exports = verifyToken;