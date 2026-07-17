const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Photo = sequelize.define("Photo", {
  image: {
    type: DataTypes.STRING
  },

  category: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Photo;
