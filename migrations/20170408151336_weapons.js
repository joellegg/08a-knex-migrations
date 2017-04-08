
exports.up = (knex, Promise) => (
  knex.schema.createTable('weapons', table => {
    table.increments() // same as 'id' int unsigned not null auto_increment
    table.string('name').notNullable().unique()
    table.integer('damage').notNullable()
  })
);

exports.down = (knex, Promise) => knex.schema.dropTable('weapons')
