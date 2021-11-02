const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
  }
})

module.exports = User;
