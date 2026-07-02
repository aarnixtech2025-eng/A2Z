const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const YoastPrimaryTerm = sequelize.define(
  "YoastPrimaryTerm",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    term_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    taxonomy: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    blog_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_yoast_primary_term",
    timestamps: false,
  }
);

module.exports = YoastPrimaryTerm;