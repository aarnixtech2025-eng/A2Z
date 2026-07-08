const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const PostMeta = sequelize.define(
  "PostMeta",
  {
    meta_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    post_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },

    meta_key: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },

    meta_value: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    tableName: "wpuz_postmeta",
    timestamps: false,

    indexes: [
      {
        name: "post_id",
        fields: ["post_id"],
      },
      {
        name: "meta_key",
        fields: ["meta_key"],
      },
    ],
  }
);

module.exports = PostMeta;