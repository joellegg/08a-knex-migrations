
exports.up = (knex, Promise) => (
  knex.schema.createTable('heroes', table => {
    table.increments() // same as 'id' int unsigned not null auto_increment
    table.string('name').notNullable().unique()
    table.string('race').notNullable()
    table.integer('weapon_id').notNullable()
    table.boolean('shield').notNullable()
    table.foreign('id').references('weapon_id')
  })
);

exports.down = (knex, Promise) => knex.schema.dropTable('heroes')
