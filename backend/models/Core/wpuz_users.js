const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const User = sequelize.define(
  "User",
  {
    ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },

    user_login: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },

    user_pass: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    user_nicename: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    user_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    user_url: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
    },

    user_registered: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    user_activation_key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
    },

    user_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    display_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  },
  {
    tableName: "wpuz_users",
    timestamps: false,
  }
);

module.exports = User;