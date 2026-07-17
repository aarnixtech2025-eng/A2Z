const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SocialSetting = sequelize.define("SocialSetting", {
  facebook: {
    type: DataTypes.STRING,
    allowNull: true
  },
  instagram: {
    type: DataTypes.STRING,
    allowNull: true
  },
  linkedin: {
    type: DataTypes.STRING,
    allowNull: true
  },
  youtube: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = SocialSetting;
