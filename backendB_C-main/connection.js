const mysql = require('mysql2/promise');

// Create a MySQL connection pool
const pool = mysql.createPool({

  host: 'localhost',
  user: 'root',
  password: 'Oma@1234',
  database: 'org',

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.on('connection', (connection) => {
  console.log('Connected to MySQL');
});

pool.on('error', (error) => {
  console.error('MySQL Pool Error:', error);
});

module.exports = pool;

