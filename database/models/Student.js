const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      contains: "@"
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: ""
  },

  gpa: {
    type: Sequelize.FLOAT,
  }



});

module.exports = Student;