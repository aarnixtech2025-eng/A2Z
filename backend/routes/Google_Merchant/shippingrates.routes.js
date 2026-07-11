const express = require("express");
const router = express.Router();

const shippingRatesController = require(
  "../../controllers/Google_Merchant/shippingrates.controller"
);

router.post(
  "/",
  shippingRatesController.createShippingRate
);

router.get(
  "/",
  shippingRatesController.getAllShippingRates
);

router.get(
  "/:id",
  shippingRatesController.getShippingRateById
);

router.put(
  "/:id",
  shippingRatesController.updateShippingRate
);

router.delete(
  "/:id",
  shippingRatesController.deleteShippingRate
);

module.exports = router;