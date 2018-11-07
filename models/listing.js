'use strict'
const bookshelf = require('./../db/bookshelf')

const Listing = bookshelf.Model.extend({
  tableName: 'listings',

users: function () {
     return this.belongsTo(User);
   },
 });

module.exports = Listing
