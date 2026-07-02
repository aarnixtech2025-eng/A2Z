const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AioseoPost = sequelize.define(
  "AioseoPost",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    keywords: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
    },
    keyphrases: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    page_analysis: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    primary_term: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    canonical_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    og_title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    og_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    og_object_type: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    og_image_type: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    og_image_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    og_image_width: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    og_image_height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    og_image_custom_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    og_image_custom_fields: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    og_video: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    og_custom_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    og_article_section: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    og_article_tags: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    twitter_use_og: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    twitter_card: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    twitter_image_type: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    twitter_image_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    twitter_image_custom_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    twitter_image_custom_fields: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    twitter_title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    twitter_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    seo_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    schema: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    schema_type: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    schema_type_options: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    pillar_content: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    robots_default: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    robots_noindex: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    robots_noarchive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    robots_nosnippet: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    robots_nofollow: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    robots_noimageindex: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    robots_noodp: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    robots_notranslate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    robots_max_snippet: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    robots_max_videopreview: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    robots_max_imagepreview: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    images: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    image_scan_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    priority: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    frequency: {
      type: DataTypes.TEXT("tiny"),
      allowNull: true,
    },
    videos: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    video_thumbnail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    video_scan_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    local_seo: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    limit_modified_date: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    options: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_aioseo_posts",
    timestamps: false,
  }
);

module.exports = AioseoPost;