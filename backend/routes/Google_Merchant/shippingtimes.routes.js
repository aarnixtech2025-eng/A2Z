const express = require("express");
const router = express.Router();

const shippingTimesController = require(
  "../../controllers/Google_Merchant/shippingtimes.controller"
);

router.post(
  "/",
  shippingTimesController.createShippingTime
);

router.get(
  "/",
  shippingTimesController.getAllShippingTimes
);

router.get(
  "/:id",
  shippingTimesController.getShippingTimeById
);

router.put(
  "/:id",
  shippingTimesController.updateShippingTime
);

router.delete(
  "/:id",
  shippingTimesController.deleteShippingTime
);

module.exports = router;