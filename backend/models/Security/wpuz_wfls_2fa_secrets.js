const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Wfls2faSecrets = sequelize.define(
  "Wfls2faSecrets",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    secret: {
      type: DataTypes.BLOB("tiny"),
      allowNull: true,
    },
    recovery: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    ctime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    vtime: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    mode: {
      type: DataTypes.ENUM("authenticator"),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_wfls_2fa_secrets",
    timestamps: false,
  }
);

module.exports = Wfls2faSecrets;