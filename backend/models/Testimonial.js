const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Testimonial = sequelize.define("Testimonial", {
  clientName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  companyName: DataTypes.STRING,

  designation: DataTypes.STRING,

  review: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 5
  },

  image: DataTypes.STRING,

  status: {
    type: DataTypes.ENUM(
      "active",
      "inactive"
    ),
    defaultValue: "active"
  }
});

module.exports = Testimonial;