// connection.js
const mariadb = require('mariadb');
const dotenv = require('dotenv');

dotenv.config();

const pool = mariadb.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

module.exports = pool;
