const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SeoSetting = sequelize.define("SeoSetting", {
  pageName: {
    type: DataTypes.STRING
  },

  seoTitle: DataTypes.STRING,

  metaDescription: DataTypes.TEXT,

  metaKeywords: DataTypes.TEXT
});

module.exports = SeoSetting;