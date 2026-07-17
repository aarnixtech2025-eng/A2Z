const { DataTypes } =
require("sequelize");

const sequelize =
require("../config/database");

const Portfolio =
sequelize.define(
"Portfolio",
{
  title: DataTypes.STRING,

  slug: DataTypes.STRING,

  category: DataTypes.STRING,

  clientName: DataTypes.STRING,

  projectUrl: DataTypes.STRING,

  technologies: DataTypes.TEXT,

  shortDescription:
    DataTypes.TEXT,

  description:
    DataTypes.TEXT("long"),

  featuredImage:
    DataTypes.STRING,

  status: {
    type: DataTypes.ENUM(
      "active",
      "inactive"
    ),
    defaultValue:
      "active"
  }
});

module.exports =
Portfolio;