const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const About = sequelize.define("About", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  ourApproach: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image1: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  image2: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ""
  },
  features: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: []
  },
  status: {
    type: DataTypes.ENUM(
      "active",
      "inactive"
    ),
    defaultValue: "active"
  }
});

module.exports = About;
