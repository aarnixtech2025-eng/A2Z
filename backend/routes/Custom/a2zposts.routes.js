const express = require("express");
const router = express.Router();

const a2zPostController = require("../../controllers/Custom/a2zposts.controller");

router.post("/", a2zPostController.createPost);

router.get("/", a2zPostController.getAllPosts);

router.get("/:id", a2zPostController.getPostById);

router.put("/:id", a2zPostController.updatePost);

router.delete("/:id", a2zPostController.deletePost);

module.exports = router;