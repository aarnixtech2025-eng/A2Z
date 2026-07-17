const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WpfmBackup = sequelize.define(
  "WpfmBackup",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    backup_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    backup_date: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wpfm_backup",
    timestamps: false,
  }
);

module.exports = WpfmBackup;