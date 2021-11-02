const Sequelize = require('sequelize');



// database name and sequelize instance
const databaseName = 'boiler_database';
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`)

module.exports = db;
