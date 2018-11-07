'use strict'
const bookshelf = require('./../db/bookshelf')

const User = bookshelf.Model.extend({
  tableName: 'users',

listings: function () {
     return this.hasMany(Listing, ['user_id']);
   },
 });

module.exports = User
