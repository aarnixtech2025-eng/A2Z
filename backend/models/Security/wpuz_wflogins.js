const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WfLogins = sequelize.define(
  "WfLogins",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    hitID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ctime: {
      type: DataTypes.DOUBLE(17, 6),
      allowNull: true,
    },
    fail: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
    },
    action: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    userID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    IP: {
      type: DataTypes.BLOB("tiny"),
      allowNull: true,
    },
    UA: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wflogins",
    timestamps: false,
  }
);

module.exports = WfLogins;