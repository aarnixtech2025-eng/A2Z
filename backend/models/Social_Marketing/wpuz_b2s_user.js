const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const B2SUser = sequelize.define(
  "B2SUser",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    blog_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    feature: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    state_url: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    register_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_b2s_user",
    timestamps: false,
  }
);

module.exports = B2SUser;