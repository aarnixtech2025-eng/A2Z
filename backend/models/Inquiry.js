const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Inquiry = sequelize.define("Inquiry", {
  name: DataTypes.STRING,

  email: DataTypes.STRING,

  phone: DataTypes.STRING,

  subject: DataTypes.STRING,

  message: DataTypes.TEXT,

  status: {
    type: DataTypes.ENUM("read", "unread"),
    defaultValue: "unread"
  }
});

module.exports = Inquiry;