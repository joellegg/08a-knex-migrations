
exports.up = (knex, Promise) => (
  knex.schema.createTable('heroes', table => {
    table.increments() // same as 'id' int unsigned not null auto_increment
    table.string('name').notNullable().unique()
    table.string('race').notNullable()
    table.string('weapon').notNullable()
    table.boolean('shield').notNullable()
  })
);

exports.down = (knex, Promise) => knex.schema.dropTable('heroes')
