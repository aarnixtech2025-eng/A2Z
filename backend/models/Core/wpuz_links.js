const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Link = sequelize.define(
  "Link",
  {
    link_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    link_url: {
      type: DataTypes.STRING(255),
    },
    link_name: {
      type: DataTypes.STRING(255),
    },
    link_image: {
      type: DataTypes.STRING(255),
    },
    link_target: {
      type: DataTypes.STRING(25),
    },
    link_description: {
      type: DataTypes.STRING(255),
    },
    link_visible: {
      type: DataTypes.STRING(20),
    },
    link_owner: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    link_rating: {
      type: DataTypes.INTEGER,
    },
    link_updated: {
      type: DataTypes.DATE,
    },
    link_rel: {
      type: DataTypes.STRING(255),
    },
    link_notes: {
      type: DataTypes.TEXT("medium"),
    },
    link_rss: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: "wpuz_links",
    timestamps: false,
  }
);

module.exports = Link;