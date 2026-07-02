const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const wpuz_tm_tasks = sequelize.define(
  "wpuz_tm_tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    class_identifier: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    attempts: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    time_created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_locked_at: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_tm_tasks",
    timestamps: false,
  }
);

module.exports = wpuz_tm_tasks;