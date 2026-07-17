const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const wpuz_tm_taskmeta = sequelize.define(
  "wpuz_tm_taskmeta",
  {
    meta_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    meta_key: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    meta_value: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_tm_taskmeta",
    timestamps: false,
  }
);

module.exports = wpuz_tm_taskmeta;