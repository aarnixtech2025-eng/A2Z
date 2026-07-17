const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const FooterSetting = sequelize.define("FooterSetting", {
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  copyrightText: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = FooterSetting;
