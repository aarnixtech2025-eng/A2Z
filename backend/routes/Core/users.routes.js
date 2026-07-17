const express = require("express");
const router = express.Router();

const usersController = require("../../controllers/Core/users.controller");

// Get all users
router.get("/", usersController.getAllUsers);

// Get user by ID
router.get("/:id", usersController.getUserById);

// Create user
router.post("/register", usersController.createUser);

// Update
router.put("/:id", usersController.updateUser);

// Delete
router.delete("/:id", usersController.deleteUser);


// Create new user
router.post("/register", usersController.createUser);

// Update user
router.put("/:id", usersController.updateUser);

// Delete user
router.delete("/:id", usersController.deleteUser);

module.exports = router;