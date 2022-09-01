const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: process.env.DATABASE_URL,
  username: 'postgres',
  password: process.env.DATABASE_PRIVATE_KEY,
  port: process.env.DATABASE_PORT,
  database: 'first-practice',
  logging: false,
});

module.exports = { db, DataTypes };
