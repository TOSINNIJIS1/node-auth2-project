
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'bigMike', password: '$2a$08$OepWRaZVcw1lE7vMReFQ3ODTal7B5wIPy/Jl6iWWsZfMykgmqkBji', department: 'Impressive TL'}
      ]);
    });
};
