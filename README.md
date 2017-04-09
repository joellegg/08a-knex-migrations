# 08a-knex-migrations
## Exercise

Create a database, fill it with useful tables, and then knock the whole thing down again.

First create a directory for your knex sand castle and cd into it
```mkdir knex-sandcastle && cd $_```

then `npm init` and install some dependencies
`npm install --save pg knex`

using your psql console, `CREATE DATABASE sandcastledb;`
HINT: don't forget the ";" at the end of the statement, and avoid capital letters.

`knex init`, and update your knexfile.js to use your sandcastledb.

`knex migrate:make add_first_table`, put a table in the exports.up, and then drop the table in exoprts.down. What kind of table? How about some monsters (monsters like attacking castles). Monsters have names, unique id's, and any other descriptive columns you feel like adding.

Now- run `knex migrate:latest` and check to see if your "monsters" table has been added to your database using pgAdmin or your psql terminal.

It looks awesome? Let's get rid of it! `knex migrate:rollback` and check to make sure that table is gone.

All done!
Just kidding...

Try it again. Make another migration to add a second table to your database. How about some heroes to fight off those monsters? Run knex migrate:latest and knex migrate:rollback a couple of time to see how the two different migration intereact with each other and the databse.

***now and forever*** whenever you make a change to your database, you can migrate:latest, you can migrate:rollback, or you can migrate:make new_migration. Do not change a migration file that has already been made, or you will be sad 😢.

### Bonus
1. Create another migration that adds a new column to your hero table
1. Create yet another migration that adds a weapons table to your database. The weapons should have names and should have a many to many relationship with your heroes.

## Exercise 08b

1. Create a seed file for your monsters and add at least three monsters to your database.
1. Create a new seed file for  your heros and add those guys to the databse.
1. Confirm your seeded data has made it into the database by checking pgAdmin or psql.
1. Create a new table called "battles" that includes a unique id, a location, a hero id (foreign key), and a monster id(foreign key).
1. Create and run a seed file to seed your new battles table.
1. Have fun storming the castle.

### Bonus
1. Seed your weapons table.
