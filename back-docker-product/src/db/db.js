const { createPool } = require("mysql2/promise");

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "mysecretpassword",
    port: 3306,
    database: "dockerProduct",
  });
  
module.exports = pool