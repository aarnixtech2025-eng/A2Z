const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const TermRelationship = sequelize.define(
  "TermRelationship",
  {
    object_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
    },

    term_taxonomy_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
    },

    term_order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: "wpuz_term_relationships",
    timestamps: false,
  }
);

module.exports = TermRelationship;