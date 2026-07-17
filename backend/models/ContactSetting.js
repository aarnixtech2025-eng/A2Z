const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ContactSetting = sequelize.define("ContactSetting", {
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = ContactSetting;
