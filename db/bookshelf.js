'use strict'

var knex = require('knex')(require('./knexfile')[process.env.NODE_ENV])
var bookshelf = require('bookshelf')(knex)

module.exports = bookshelf
