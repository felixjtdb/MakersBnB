const express = require("express")
const app = express()
const PORT = "8080"
const HOST = "127.0.0.1"

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("index", {});
  res.end()
});

app.get('/signup', (req, res) => {
  res.render("sign_up", {});
  res.end()
});

app.listen(PORT, () => {
  console.log("server up")
});
