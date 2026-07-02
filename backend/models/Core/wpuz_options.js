const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Option = sequelize.define(
  "Option",
  {
    option_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    option_name: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
    option_value: {
      type: DataTypes.TEXT("long"),
    },
    autoload: {
      type: DataTypes.STRING(20),
    },
  },
  {
    tableName: "wpuz_options",
    timestamps: false,
  }
);

module.exports = Option;