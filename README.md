# Makers BnB

## User Stories
```
As a user,
So that I can use the website,
I would like to be able to sign up.

As a user,
So that I can use the website,
I would like to be able to login.

As a lister,
So that I can rent out my property,
I would like to list my property.


```

## SetUp Environment
1. How to download node_modules
- Run: `npm install`

2. How to run linter
- Run: `./node_modules/.bin/eslint {file path for file you're running through the linter}`
- Ex: `./node_modules/.bin/eslint ./src/test.js`

3. How to add new files to Jasmine
- In SpecRunner.html, add file name for Spec and file name for source (see headings in file)

4. How to run Jasmine
- Copy full path of SpecRunner.html
- Paste full into webbrowser
- OR run in command line: `open SpecRunner.html`

## Set Up Databases
`npm install`
1. Install PostgreSQL
2. Run `psql postgres`
3. Run `CREATE DATABASE makers_bnb;`
4. Run `CREATE DATABASE makers_bnb_test;`
5. Run `\q`
6. Run `./node_modules/.bin/knex --knexfile db/knexfile.js migrate:latest --env development`
7. Run `./node_modules/.bin/knex --knexfile db/knexfile.js migrate:latest --env test`
7. Run `./node_modules/.bin/knex --knexfile db/knexfile.js migrate:latest --env test`
8. `./node_modules/.bin/knex seed:run --knexfile db/knexfile.js --env test`
8. `./node_modules/.bin/knex seed:run --knexfile db/knexfile.js --env development`

## SetUp Database
1. Install PostgreSQL
2. To start `psql` type the command `psql postgres` into your terminal
3. Create the database using the `psql` command `CREATE DATABASE makersbnb;`
4. Connect to the database using the `pqsl` command `\c makersbnb;`
5. Run the queries in the files: `01_create_users_table.sql` and `02_create_property_table.sql`

## SetUp Test Database
1. To start `psql` type the command `psql postgres` into your terminal
2. Create the database using the `psql` command `CREATE DATABASE makersbnb_test;`
3. Connect to the database using the `pqsl` command `\c makersbnb;`
4. Run the queries in the files: `01_create_users_table.sql` and `02_create_property_table.sql`

=======
### Dev team

[Felix Dalby-Bowler](https://github.com/felixjtdb)
[Shannon Gamby](https://github.com/shannongamby)
[Imtiyaz Zaman](https://github.com/imtiyazzaman1)
[Raylene Smith](https://github.com/rsmith88)
[Chloe Verity](https://github.com/chloeverity)
