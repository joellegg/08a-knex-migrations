
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('battles').del()
    .then(function () {
      // Inserts seed entries
      return knex('battles').insert([
        {name: 'rohan', monster_id: '1', hero_id: '2'},
        {name: 'helms deep', monster_id: '2', hero_id: '3'},
        {name: 'black gate', monster_id: '3', hero_id: '1'}

      ]);
    });
};
