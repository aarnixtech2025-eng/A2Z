const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const B2SPostsSchedDetails = sequelize.define(
  "B2SPostsSchedDetails",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sched_data: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_b2s_posts_sched_details",
    timestamps: false,
  }
);

module.exports = B2SPostsSchedDetails;