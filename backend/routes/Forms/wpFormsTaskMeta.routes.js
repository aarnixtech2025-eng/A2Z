const express = require("express");

const router = express.Router();

const wpFormsTaskMetaController = require(
  "../../controllers/Forms/wpFormsTaskMeta.controller"
);

/* ==========================================================
   WP FORMS TASK META ROUTES
========================================================== */

// Get all task meta
router.get(
  "/",
  wpFormsTaskMetaController.getAllTaskMeta
);

// Get task meta by ID
router.get(
  "/:id",
  wpFormsTaskMetaController.getTaskMetaById
);

// Create task meta
router.post(
  "/",
  wpFormsTaskMetaController.createTaskMeta
);

// Update task meta
router.put(
  "/:id",
  wpFormsTaskMetaController.updateTaskMeta
);

// Delete task meta
router.delete(
  "/:id",
  wpFormsTaskMetaController.deleteTaskMeta
);

module.exports = router;