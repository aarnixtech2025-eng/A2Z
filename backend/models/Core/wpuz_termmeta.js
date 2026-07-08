const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const TermMeta = sequelize.define(
  "TermMeta",
  {
    meta_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    term_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    meta_key: {
      type: DataTypes.STRING(255),
    },
    meta_value: {
      type: DataTypes.TEXT("long"),
    },
  },
  {
    tableName: "wpuz_termmeta",
    timestamps: false,
  }
);

module.exports = TermMeta;