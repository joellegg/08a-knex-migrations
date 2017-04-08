// use database sandcastledb, removed staging and production phases

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'sandcastledb',
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
