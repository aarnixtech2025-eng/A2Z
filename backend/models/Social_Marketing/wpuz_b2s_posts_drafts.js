const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const B2SPostsDrafts = sequelize.define(
  "B2SPostsDrafts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    last_save_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    blog_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    save_origin: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    data: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_b2s_posts_drafts",
    timestamps: false,
  }
);

module.exports = B2SPostsDrafts;