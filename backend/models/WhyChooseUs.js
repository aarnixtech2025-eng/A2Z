const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WhyChooseUs = sequelize.define("WhyChooseUs", {
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  features: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: []
  },
  clients: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  projects: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  services: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  rewards: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  status: {
    type: DataTypes.ENUM(
      "active",
      "inactive"
    ),
    defaultValue: "active"
  }
});

module.exports = WhyChooseUs;
