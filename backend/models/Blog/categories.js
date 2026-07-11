// const { DataTypes } = require("sequelize");
// const sequelize = require("../../config/database");

// const Category = sequelize.define(
//   "Category",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },

//     name: {
//       type: DataTypes.STRING(200),
//       allowNull: false,
//     },

//     slug: {
//       type: DataTypes.STRING(200),
//       allowNull: false,
//       unique: true,
//     },

//     description: {
//       type: DataTypes.TEXT("long"),
//       allowNull: true,
//     },

//     parentId: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//       defaultValue: null,
//     },

//     status: {
//       type: DataTypes.ENUM("Active", "Inactive"),
//       allowNull: false,
//       defaultValue: "Active",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = Category;
