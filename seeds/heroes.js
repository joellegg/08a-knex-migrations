
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('heroes').insert([
        {name: 'strider', race: 'man', weapon_id: '1', shield: 'false'},
        {name: 'gimli', race: 'dwarf', weapon_id: '2', shield: 'true'},
        {name: 'legolas', race: 'elf', weapon_id: '3', shield: 'false'}
      ]);
    });
};
