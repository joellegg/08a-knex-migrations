
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('weapons').del()
    .then(function () {
      // Inserts seed entries
      return knex('weapons').insert([
        {name: 'butter knife', damage: '1'},
        {name: 'club', damage: '5'},
        {name: 'broadsword', damage: '9'}
      ]);
    });
};
