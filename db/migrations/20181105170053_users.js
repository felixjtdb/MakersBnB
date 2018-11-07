
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.text('name');
      table.string('username').unique(),
      table.string('email').unique(),
      table.string('password')
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users')
};
