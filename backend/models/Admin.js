const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Admin = sequelize.define("Admin", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false
  },

  password: {
    type: DataTypes.STRING, 
    allowNull: false
  },

  role: {
    type: DataTypes.ENUM("admin", "editor"),
    defaultValue: "admin"
  }
});

module.exports = Admin;