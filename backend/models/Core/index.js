const User = require("./wpuz_users");
const UserMeta = require("./wpuz_usermeta");

const Post = require("./wpuz_posts");
const PostMeta = require("./wpuz_postmeta");

const Comment = require("./wpuz_comments");
const CommentMeta = require("./wpuz_commentmeta");

const Term = require("./wpuz_terms");
const TermTaxonomy = require("./wpuz_term_taxonomy");
const TermMeta = require("./wpuz_termmeta");


module.exports = {
  User,
  UserMeta,
  Post,
  PostMeta,
  Comment,
  CommentMeta,
  Term,
  TermTaxonomy,
  TermMeta,
};

require("./associations");