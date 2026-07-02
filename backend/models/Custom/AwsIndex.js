const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AwsIndex = sequelize.define(
  "AwsIndex",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      allowNull: false,
    },

    term: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    term_source: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    type: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    count: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },

    in_stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    term_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },

    visibility: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    lang: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_aws_index",
    timestamps: false,
  }
);

module.exports = AwsIndex;