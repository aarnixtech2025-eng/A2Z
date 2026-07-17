const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WpieTemplate = sequelize.define(
  "WpieTemplate",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    opration: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    unique_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    opration_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    options: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    process_log: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    process_lock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_update_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wpie_template",
    timestamps: false,
  }
);

module.exports = WpieTemplate;