const express = require("express");

const router = express.Router();

const wpFormsLogController = require(
  "../../controllers/Forms/wpFormsLog.controller"
);

/* ==========================================================
   WP FORMS LOG ROUTES
========================================================== */

// Get all logs
router.get(
  "/",
  wpFormsLogController.getAllLogs
);

// Get logs by form ID
router.get(
  "/form/:formId",
  wpFormsLogController.getLogsByFormId
);

// Get logs by entry ID
router.get(
  "/entry/:entryId",
  wpFormsLogController.getLogsByEntryId
);

// Get logs by user ID
router.get(
  "/user/:userId",
  wpFormsLogController.getLogsByUserId
);

// Get log by ID
router.get(
  "/:id",
  wpFormsLogController.getLogById
);

// Create log
router.post(
  "/",
  wpFormsLogController.createLog
);

// Update log
router.put(
  "/:id",
  wpFormsLogController.updateLog
);

// Delete log
router.delete(
  "/:id",
  wpFormsLogController.deleteLog
);

module.exports = router;