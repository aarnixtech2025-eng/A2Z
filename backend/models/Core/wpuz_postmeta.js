const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PostMeta = sequelize.define(
  "PostMeta",
  {
    meta_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },

    post_id: DataTypes.BIGINT.UNSIGNED,

    meta_key: DataTypes.STRING(255),

    meta_value: DataTypes.TEXT("long"),
  },
  {
    tableName: "wpuz_postmeta",
    timestamps: false,
  }
);

module.exports = PostMeta;