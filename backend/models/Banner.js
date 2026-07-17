const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Banner = sequelize.define("Banner", {
  title: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  banners: {
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

module.exports = Banner;