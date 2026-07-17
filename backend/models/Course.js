const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Course = sequelize.define("Course", {
  title: DataTypes.STRING,
  image: DataTypes.STRING,
  description: DataTypes.TEXT
});

module.exports = Course;
