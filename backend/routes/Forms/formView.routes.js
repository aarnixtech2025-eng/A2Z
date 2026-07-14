const express = require("express");

const router = express.Router();

const formViewController = require(
  "../../controllers/Forms/formView.controller"
);

// Get all form views
router.get(
  "/",
  formViewController.getAllFormViews
);

// Get form view by ID
router.get(
  "/:id",
  formViewController.getFormViewById
);

// Create form view
router.post(
  "/",
  formViewController.createFormView
);

// Update form view
router.put(
  "/:id",
  formViewController.updateFormView
);

// Delete form view
router.delete(
  "/:id",
  formViewController.deleteFormView
);

module.exports = router;