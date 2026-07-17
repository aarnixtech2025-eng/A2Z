const {
  User,
  UserMeta,
  Post,
  PostMeta,
  Comment,
  CommentMeta,
  Term,
  TermMeta,
  TermTaxonomy,
   TermRelationship
} = require("./index");

// USER ↔ USER META

User.hasMany(UserMeta, {
  foreignKey: "user_id",
  sourceKey: "ID",
  as: "meta",
});

UserMeta.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "ID",
  as: "user",
});

// User -> Posts
User.hasMany(Post, {
  foreignKey: "post_author",
  sourceKey: "ID",
  as: "posts",
});

Post.belongsTo(User, {
  foreignKey: "post_author",
  targetKey: "ID",
  as: "author",
});

// Post -> PostMeta
Post.hasMany(PostMeta, {
  foreignKey: "post_id",
  sourceKey: "ID",
  as: "meta",
});

PostMeta.belongsTo(Post, {
  foreignKey: "post_id",
  targetKey: "ID",
  as: "post",
});

// Post -> Comments
Post.hasMany(Comment, {
  foreignKey: "comment_post_ID",
  sourceKey: "ID",
  as: "comments",
});

Comment.belongsTo(Post, {
  foreignKey: "comment_post_ID",
  targetKey: "ID",
  as: "post",
});

// User -> Comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  sourceKey: "ID",
  as: "comments",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "ID",
  as: "user",
});
// Comment -> CommentMeta
Comment.hasMany(CommentMeta, {
  foreignKey: "comment_id",
  sourceKey: "comment_ID",
  as: "meta",
});

CommentMeta.belongsTo(Comment, {
  foreignKey: "comment_id",
  targetKey: "comment_ID",
  as: "comment",
});

// Term->Termmeta
Term.hasMany(TermMeta, {
  foreignKey: "term_id",
  sourceKey: "term_id",
  as: "meta",
});

TermMeta.belongsTo(Term, {
  foreignKey: "term_id",
  targetKey: "term_id",
  as: "term",
});

// Term -> TermTaxonomy

Term.hasMany(TermTaxonomy, {
  foreignKey: "term_id",
  sourceKey: "term_id",
  as: "taxonomy",
});

TermTaxonomy.belongsTo(Term, {
  foreignKey: "term_id",
  targetKey: "term_id",
  as: "term",
});

// Post -> TermRelationship
Post.hasMany(TermRelationship, {
  foreignKey: "object_id",
  sourceKey: "ID",
  as: "relationships",
});

TermRelationship.belongsTo(Post, {
  foreignKey: "object_id",
  targetKey: "ID",
  as: "post",
});

// TermTaxonomy -> TermRelationship
TermTaxonomy.hasMany(TermRelationship, {
  foreignKey: "term_taxonomy_id",
  sourceKey: "term_taxonomy_id",
  as: "relationships",
});

TermRelationship.belongsTo(TermTaxonomy, {
  foreignKey: "term_taxonomy_id",
  targetKey: "term_taxonomy_id",
  as: "taxonomy",
});