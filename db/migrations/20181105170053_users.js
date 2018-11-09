
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary().notNull();
      table.text('name').notNull();
      table.string('username').unique().notNull(),
      table.string('email').unique().notNull(),
      table.string('password').notNull()
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users')
};
