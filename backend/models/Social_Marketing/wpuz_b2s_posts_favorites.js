const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const B2SPostsFavorites = sequelize.define(
  "B2SPostsFavorites",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    save_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_b2s_posts_favorites",
    timestamps: false,
  }
);

module.exports = B2SPostsFavorites;