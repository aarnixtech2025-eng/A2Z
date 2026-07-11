const express = require("express");
const router = express.Router();

const adsRecommendationsController = require(
  "../../controllers/Google_Merchant/adsrecommendations.controller"
);

router.post(
  "/",
  adsRecommendationsController.createRecommendation
);

router.get(
  "/",
  adsRecommendationsController.getAllRecommendations
);

router.get(
  "/:id",
  adsRecommendationsController.getRecommendationById
);

router.put(
  "/:id",
  adsRecommendationsController.updateRecommendation
);

router.delete(
  "/:id",
  adsRecommendationsController.deleteRecommendation
);

module.exports = router;