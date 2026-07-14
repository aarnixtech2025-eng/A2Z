const express = require("express");

const router = express.Router();

const wpFormsPaymentController = require(
  "../../controllers/Forms/wpFormsPayment.controller"
);

// Get all payments with meta
router.get(
  "/",
  wpFormsPaymentController.getAllPayments
);

// Get payment by ID with meta
router.get(
  "/:id",
  wpFormsPaymentController.getPaymentById
);

// Create payment with meta
router.post(
  "/",
  wpFormsPaymentController.createPayment
);

// Update payment with meta
router.put(
  "/:id",
  wpFormsPaymentController.updatePayment
);

// Delete payment with meta
router.delete(
  "/:id",
  wpFormsPaymentController.deletePayment
);

module.exports = router;