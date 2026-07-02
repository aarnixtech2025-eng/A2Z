const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WflsSettings = sequelize.define(
  "WflsSettings",
  {
    name: {
      type: DataTypes.STRING(191),
      primaryKey: true,
    },
    value: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
    autoload: {
      type: DataTypes.ENUM("no", "yes"),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wfls_settings",
    timestamps: false,
  }
);

module.exports = WflsSettings;