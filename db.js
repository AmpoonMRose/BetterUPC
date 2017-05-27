const Sequelize = require('sequelize');

const connection = 'postgres://mrose:HANGGANGSATAGUMP4Y@localhost:5432/entries';

const database = new Sequelize(connection);


module.exports = database;
