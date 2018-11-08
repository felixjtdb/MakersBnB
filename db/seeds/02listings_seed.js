
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {
          id: 1,
          user_id: 1,
          name: 'Room to rent in Barcelona!',
          price: '99.99',
          location: 'Barcelona',
          bedrooms: '1',
          type: 'Single Room',
          description: 'A description for a room to rent in Barcelona!'
        }
      ]);
    });
};
