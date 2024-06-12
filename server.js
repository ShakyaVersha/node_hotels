const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT||3000;

app.get("/", function (req, res) {
  res.send("welcome to my hotel how can help you");
});

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);
const menuRoutes = require("./routes/MenuRoutes");
app.use("/menu", menuRoutes);



app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
