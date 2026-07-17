const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PortfolioGallery = sequelize.define("PortfolioGallery", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = PortfolioGallery;
