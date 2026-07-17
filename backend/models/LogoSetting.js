const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const LogoSetting = sequelize.define("LogoSetting", {
  logo: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = LogoSetting;
