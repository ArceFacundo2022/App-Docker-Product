const { createPool } = require("mysql2/promise");

const pool = createPool({
    host: "database",
    user: "root",
    password: "mysecretpassword",
    port: 3306,
    database: "dockerProduct",
  });

const postProduct = async (req, res) => {
    try {
        const { name, category, price } = req.body;
        const [rows] = await pool.query(
          "INSERT INTO product (name, category, price) VALUES (?,?,?)",
          [name, category, price]
        );
        res.json({
          msg: "Producto insertado",
          id: rows.insertId,
          name,
          category,
          price,
        });
    } catch (error) {
        console.log()
    }
  };

  const getProduct = async (req, res) => {
    try {
        const [rows] = await pool.query(
          "SELECT * FROM product"
        );
        res.json({
          msg: "Los productos disponibles son:",
          products: rows
        });
    } catch (error) {
        console.log()
    }
  };

  module.exports = {postProduct, getProduct}







  //CREATE DATABASE IF NOT EXISTS dockerProduct;
  
  //USE dockerProduct;
  
  /*CREATE TABLE product (
      id INT(11) NOT NULL AUTO_INCREMENT,
      name VARCHAR(45) DEFAULT NULL,
      category VARCHAR(100) DEFAULT NULL,
      price INT(10) DEFAULT NULL,
      PRIMARY KEY (id)
  );*/