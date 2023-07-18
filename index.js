const express = require("express");
const { Sequelize } = require("sequelize");

const app = express();
const port = 3000;
const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

// Set up the database connection
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "postgres",
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connection established."))
  .catch((err) => console.error("Unable to connect to the database:", err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
