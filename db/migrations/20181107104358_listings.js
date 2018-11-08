
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('listings', function (table) {
      table.increments('id').primary();
      table.integer('user_id')
        .notNull()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.string('name').unique(),
      table.decimal('price'),
      table.string('location')
      table.integer('bedrooms')
      table.string('type')
      table.string('description')
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('listings')
};
