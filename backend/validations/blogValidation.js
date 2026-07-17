const { body } = require("express-validator");

exports.blogValidation = [
  body("title")
    .notEmpty(),

  body("content")
    .notEmpty(),

  body("status")
    .isIn([
      "draft",
      "published"
    ])
];