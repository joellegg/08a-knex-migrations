
exports.up = (knex, Promise) => (
  knex.schema.createTable('battles', table => {
    table.increments() // same as 'id' int unsigned not null auto_increment
    table.string('name').notNullable().unique()
    table.integer('monster_id').notNullable()
    table.foreign('monster_id').references('monsters')
    table.integer('hero_id').notNullable()
    table.foreign('hero_id').references('heroes')
  })
);

exports.down = (knex, Promise) => knex.schema.dropTable('battles')
