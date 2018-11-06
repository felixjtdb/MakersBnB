const express = require("express")
const app = express()
const PORT = "8080"
const HOST = "127.0.0.1"

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("index", {});
});

app.get('/signup', (req, res) => {
  res.render("sign_up", {});
});

app.get('/login', (req, res) => {
  res.render("log_in", {});
});

app.listen(PORT, () => {
  console.log("server up")
});
