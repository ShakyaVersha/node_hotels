const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("welcome to my hotel how can help you");
});

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);
const menuRoutes = require("./routes/MenuRoutes");
app.use("/menu", menuRoutes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
