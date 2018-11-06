// Update with your config settings.
require('dotenv').config()

module.exports = {

  test: {
    client: 'pg',
    connection: {
      database: 'makers_bnb_test'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'pg',
    connection: {
      database: 'makers_bnb',
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
