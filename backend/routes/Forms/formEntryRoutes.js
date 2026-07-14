const express = require("express");

const router = express.Router();

const formEntryController = require(
  "../../controllers/Forms/FormEntryController"
);

/* ==========================================================
   FORM ENTRY ROUTES
========================================================== */

// Get all form entries
router.get(
  "/",
  formEntryController.getAllFormEntries
);

// Get form entry by ID
router.get(
  "/:id",
  formEntryController.getFormEntryById
);

// Create form entry
router.post(
  "/",
  formEntryController.createFormEntry
);

// Update form entry
router.put(
  "/:id",
  formEntryController.updateFormEntry
);

// Delete form entry
router.delete(
  "/:id",
  formEntryController.deleteFormEntry
);

module.exports = router;