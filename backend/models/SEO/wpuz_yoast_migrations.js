const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const YoastMigration = sequelize.define(
  "YoastMigration",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    version: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_yoast_migrations",
    timestamps: false,
  }
);

module.exports = YoastMigration;