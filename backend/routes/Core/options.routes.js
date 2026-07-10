const express = require("express");
const router = express.Router();

const optionController = require("../../controllers/Core/options.controller");

// Create
router.post("/", optionController.createOption);

// Get All
router.get("/", optionController.getAllOptions);

// Get By ID
router.get("/:id", optionController.getOptionById);

// Update
router.put("/:id", optionController.updateOption);

// Delete
router.delete("/:id", optionController.deleteOption);

module.exports = router;