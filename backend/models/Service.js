const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Service = sequelize.define("Service", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  slug: {
    type: DataTypes.STRING
  },

  shortDescription: {
    type: DataTypes.TEXT
  },

  description: {
    type: DataTypes.TEXT("long")
  },

  image: {
    type: DataTypes.STRING
  },

  status: {
    type: DataTypes.ENUM(
      "active",
      "inactive"
    ),
    defaultValue: "active"
  }
});

module.exports = Service;