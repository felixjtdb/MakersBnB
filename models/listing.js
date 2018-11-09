'use strict'
const bookshelf = require('./../db/bookshelf')
const User = require('./user')

const Listing = bookshelf.Model.extend({
  tableName: 'listings',
  users: function () {
    return this.belongsTo(User, 'user_id');
  },
});

module.exports = Listing
