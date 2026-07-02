const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const CommentMeta = sequelize.define(
  "CommentMeta",
  {
    meta_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },

    comment_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },

    meta_key: {
      type: DataTypes.STRING(255),
    },

    meta_value: {
      type: DataTypes.TEXT("long"),
    },
  },
  {
    tableName: "wpuz_commentmeta",
    timestamps: false,
  }
);

module.exports = CommentMeta;