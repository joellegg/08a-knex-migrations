
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {name: 'strongbad', type: 'orgre', weapon: 'club', eyes: '2'},
        {name: 'shelob', type: 'spider', weapon: 'fangs', eyes: '80'},
        {name: 'bolg', type: 'orc', weapon: 'darts', eyes: '2'}
      ]);
    });
};
