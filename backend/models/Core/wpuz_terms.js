const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Term = sequelize.define(
  "Term",
  {
    term_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(200),
    },
    slug: {
      type: DataTypes.STRING(200),
    },
    term_group: {
      type: DataTypes.BIGINT,
    },
  },
  {
    tableName: "wpuz_terms",
    timestamps: false,
  }
);

module.exports = Term;