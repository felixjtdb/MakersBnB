const express = require("express")
const session = require('express-session')
const app = express()
app.use(session({ secret: 'krunal', resave: false, saveUninitialized: true, }));

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))



const PORT = "8080"
const HOST = "127.0.0.1"

var User = require('./models/user')

const bcrypt = require('bcrypt');
const saltRound = 10;


app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("index", {});
});

app.get('/signup', (req, res) => {
  res.render("sign_up", {});
});

app.post('/signup', (req, res) => {
  bcrypt.hash("password", saltRound, function (err, hash) {
    new User({
      name: 'Chloe',
      username: 'chloe123',
      email: 'chloe@123.com',
      password: hash
    }).save()
    .then(function (user) {
      res.json({user})
      res.redirect('/');
    })
  });
})

app.get('/login', (req, res) => {
  res.render("log_in", {});
});

app.post('/login_user', (req, res) => {
  console.log(req.body);
  console.log(2);
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
