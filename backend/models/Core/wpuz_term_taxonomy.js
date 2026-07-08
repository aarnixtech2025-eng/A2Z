const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const TermTaxonomy = sequelize.define(
  "TermTaxonomy",
  {
    term_taxonomy_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },

    term_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },

    taxonomy: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },

    parent: {
      type: DataTypes.BIGINT.UNSIGNED,
      defaultValue: 0,
    },

    count: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
  },
  {
    tableName: "wpuz_term_taxonomy",
    timestamps: false,
  }
);

module.exports = TermTaxonomy;