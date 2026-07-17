const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const HD = sequelize.define("HD", {
  image: {
    type: DataTypes.STRING
  }
});

module.exports = HD;
