const express = require("express")
const session = require('express-session')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const PORT = "8080"
const HOST = "127.0.0.1"
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

var User = require('./models/user')
var Listing = require('./models/listing')

const bcrypt = require('bcrypt');
const saltRound = 1;

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  Listing.fetchAll()
  .then(function (results) {
    res.render("index", {listings: results.toJSON()});
  })
});

app.get('/signup', (req, res) => {
  res.render("sign_up", {});
});

app.post('/signup', (req, res) => {
    new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).save()
    .then(function (user) {
      res.json({user})
  });
})

app.get('/login', (req, res) => {
  res.render("log_in", {});
});

app.post('/login_user', (req, res) => {
    User
      .where({
        'username': req.body.username,
        'password': req.body.password
      })
      .fetchAll()
      .then(function (users) {
        res.json({users})
  })
})

app.listen(PORT, () => {
  console.log("server up")
});
