const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  waitForConnections: true,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  }
  if (connection) connection.release();
});

const promisePool = pool.promise();

module.exports = promisePool;
