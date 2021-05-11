const { Sequelize } = require('sequelize');
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const routes = require('./controllers')

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/dashboard.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/login.html"));
});
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/signup.html"));
});

//require("../controllers/post_controller.js")(app);

app.use(express.static("Public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



