const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

// Middleware to log requests with a timestamp
const logRequest = (req, res, next) => {
  const timestamp = new Date().toLocaleString();
  console.log(`(${timestamp}) Request Made to: ${req.originalUrl}`);
  next();
}

// Print to console immediately when the server starts
console.log("middle ware printed");
app.use(logRequest); // Register the logRequest middleware

// Print to console immediately when the server starts
console.log("body parser printed");
app.use(bodyParser.json()); // Register the bodyParser.json() middleware

// Define the root route
app.get("/", function (req, res) {
  res.send("welcome to my hotel how can help you");
});

// Define and use personRoutes
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

// Define and use menuRoutes
const menuRoutes = require("./routes/MenuRoutes");
app.use("/menu", menuRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
