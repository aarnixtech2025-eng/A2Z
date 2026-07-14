const express = require("express");

const router = express.Router();

const wpFormsPaymentMetaController = require(
  "../../controllers/Forms/wpFormsPaymentMeta.controller"
);

/* ==========================================================
   WP FORMS PAYMENT META ROUTES
========================================================== */

// Get all payment meta
router.get(
  "/",
  wpFormsPaymentMetaController.getAllPaymentMeta
);

// Get meta by payment ID
router.get(
  "/payment/:paymentId",
  wpFormsPaymentMetaController.getMetaByPaymentId
);

// Get payment meta by ID
router.get(
  "/:id",
  wpFormsPaymentMetaController.getPaymentMetaById
);

// Create payment meta
router.post(
  "/",
  wpFormsPaymentMetaController.createPaymentMeta
);

// Update payment meta
router.put(
  "/:id",
  wpFormsPaymentMetaController.updatePaymentMeta
);

// Delete payment meta
router.delete(
  "/:id",
  wpFormsPaymentMetaController.deletePaymentMeta
);

module.exports = router;