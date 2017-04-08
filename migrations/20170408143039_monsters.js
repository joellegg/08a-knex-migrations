exports.up = (knex, Promise) => (
  knex.schema.createTable('monsters', table => {
    table.increments() // same as 'id' int unsigned not null auto_increment
    table.string('name').notNullable().unique()
    table.string('type').notNullable()
    table.string('weapon').notNullable()
    table.integer('eyes')
  })
);

exports.down = (knex, Promise) => knex.schema.dropTable('monsters')
