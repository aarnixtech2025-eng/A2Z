const express = require("express");

const router = express.Router();

const formReportController = require(
  "../../controllers/Forms/formReport.controller"
);

/* ==========================================================
   FORM REPORT ROUTES
========================================================== */

// Get all form reports
router.get(
  "/",
  formReportController.getAllFormReports
);

// Get form report by ID
router.get(
  "/:id",
  formReportController.getFormReportById
);

// Create form report
router.post(
  "/",
  formReportController.createFormReport
);

// Update form report
router.put(
  "/:id",
  formReportController.updateFormReport
);

// Delete form report
router.delete(
  "/:id",
  formReportController.deleteFormReport
);

module.exports = router;