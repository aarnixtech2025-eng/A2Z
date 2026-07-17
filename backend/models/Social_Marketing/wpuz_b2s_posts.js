const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const B2SPosts = sequelize.define(
  "B2SPosts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    blog_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    last_edit_blog_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_timezone: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    sched_details_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sched_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    sched_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sched_date_utc: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    publish_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    publish_link: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    publish_error_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    network_details_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    post_for_relay: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    post_for_approve: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    relay_primary_post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    relay_delay_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hook_action: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    hide: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    v2_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    post_format: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_b2s_posts",
    timestamps: false,
  }
);

module.exports = B2SPosts;