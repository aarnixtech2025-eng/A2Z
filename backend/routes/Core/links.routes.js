const express = require("express");
const router = express.Router();

const linkController = require("../../controllers/Core/links.controller");

// Create
router.post("/", linkController.createLink);

// Get All
router.get("/", linkController.getAllLinks);

// Get By ID
router.get("/:id", linkController.getLinkById);

// Update
router.put("/:id", linkController.updateLink);

// Delete
router.delete("/:id", linkController.deleteLink);

module.exports = router;