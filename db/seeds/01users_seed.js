exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1,
          name: 'test user',
          username: 't_user',
          email: 'test@user.com',
          password: 'qwerty'
        }
      ]);
    });
};