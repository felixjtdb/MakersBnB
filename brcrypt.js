const bcrypt = require('bcrypt');
const saltRound = 10;

var User = require('./models/user');
var bookshelf = require('./db/bookshelf');


var password = 'password'

bcrypt.hash(password, saltRound, function (err, hash) {
  new User({
    name: 'Chloe',
    username: 'chloe123',
    email: 'chloe@123.com',
    password: hash
  }).save()
});



console.log(password);
