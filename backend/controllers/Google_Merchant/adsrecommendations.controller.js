const adsRecommendationsService = require(
  "../../services/Google_Merchant/adsrecommendations.service"
);

class AdsRecommendationsController {
  // Create
  async createRecommendation(req, res, next) {
    try {
      const recommendation =
        await adsRecommendationsService.createRecommendation(
          req.body
        );

      return res.status(201).json({
        success: true,
        message: "Ads Recommendation created successfully.",
        data: recommendation,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get All
  async getAllRecommendations(req, res, next) {
    try {
      const recommendations =
        await adsRecommendationsService.getAllRecommendations();

      return res.status(200).json({
        success: true,
        count: recommendations.length,
        data: recommendations,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get By ID
  async getRecommendationById(req, res, next) {
    try {
      const recommendation =
        await adsRecommendationsService.getRecommendationById(
          req.params.id
        );

      if (!recommendation) {
        return res.status(404).json({
          success: false,
          message: "Ads Recommendation not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: recommendation,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update
  async updateRecommendation(req, res, next) {
    try {
      const recommendation =
        await adsRecommendationsService.updateRecommendation(
          req.params.id,
          req.body
        );

      if (!recommendation) {
        return res.status(404).json({
          success: false,
          message: "Ads Recommendation not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Ads Recommendation updated successfully.",
        data: recommendation,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete
  async deleteRecommendation(req, res, next) {
    try {
      const deleted =
        await adsRecommendationsService.deleteRecommendation(
          req.params.id
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Ads Recommendation not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Ads Recommendation deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AdsRecommendationsController();