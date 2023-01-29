const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'root', //por alguna razon no me deja usar la variable de entorno
  database: 'reapairsDB',

  logging: false,
});

module.exports = { db };
