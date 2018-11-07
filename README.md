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
1.`npm install`
2. Install PostgreSQL
3. Run `psql postgres`
4. Run `CREATE DATABASE makers_bnb;`
5. Run `CREATE DATABASE makers_bnb_test;`
6. Run `\q`
7. Run `./node_modules/.bin/knex --knexfile db/knexfile.js migrate:latest --env development`
8. Run `./node_modules/.bin/knex --knexfile db/knexfile.js migrate:latest --env test`
9. `./node_modules/.bin/knex seed:run --knexfile db/knexfile.js --env test`
10. `./node_modules/.bin/knex seed:run --knexfile db/knexfile.js --env development`

=======
### Dev team

[Felix Dalby-Bowler](https://github.com/felixjtdb)
[Shannon Gamby](https://github.com/shannongamby)
[Imtiyaz Zaman](https://github.com/imtiyazzaman1)
[Raylene Smith](https://github.com/rsmith88)
[Chloe Verity](https://github.com/chloeverity)
