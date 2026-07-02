const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const YoastIndexable = sequelize.define(
  "YoastIndexable",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    permalink: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },

    permalink_hash: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },

    object_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    object_type: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },

    object_sub_type: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },

    author_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    post_parent: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    description: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
    },

    breadcrumb_title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    post_status: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    is_public: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    is_protected: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    has_public_posts: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    number_of_pages: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },

    canonical: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },

    primary_focus_keyword: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },

    primary_focus_keyword_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    readability_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    is_cornerstone: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    is_robots_noindex: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    is_robots_nofollow: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    is_robots_noarchive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    is_robots_noimageindex: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    is_robots_nosnippet: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    twitter_title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    twitter_image: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },

    twitter_description: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },

    twitter_image_id: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },

    twitter_image_source: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    open_graph_title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    open_graph_description: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },

    open_graph_image: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
    },

    open_graph_image_id: {
      type: DataTypes.STRING(191),
      allowNull: true,
    },

    open_graph_image_source: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    open_graph_image_meta: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
    },

    link_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    incoming_link_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    prominent_words_version: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },

    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    blog_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    language: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },

    region: {
      type: DataTypes.STRING(32),
      allowNull: true,
    },

    schema_page_type: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },

    schema_article_type: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },

    has_ancestors: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    estimated_reading_time_minutes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    version: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    object_last_modified: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    object_published_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    inclusive_language_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "wpuz_yoast_indexable",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = YoastIndexable;