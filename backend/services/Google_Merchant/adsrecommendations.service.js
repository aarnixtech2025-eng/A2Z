const {
  AdsRecommendations,
} = require("../../models/Google_Merchant");

class AdsRecommendationsService {
  // Create
  async createRecommendation(data) {
    return await AdsRecommendations.create(data);
  }

  // Get All
  async getAllRecommendations() {
    return await AdsRecommendations.findAll({
      order: [["recommendation_id", "DESC"]],
    });
  }

  // Get By ID
  async getRecommendationById(id) {
    return await AdsRecommendations.findByPk(id);
  }

  // Update
  async updateRecommendation(id, data) {
    const recommendation =
      await AdsRecommendations.findByPk(id);

    if (!recommendation) return null;

    await recommendation.update(data);

    return recommendation;
  }

  // Delete
  async deleteRecommendation(id) {
    const recommendation =
      await AdsRecommendations.findByPk(id);

    if (!recommendation) return false;

    await recommendation.destroy();

    return true;
  }
}

module.exports = new AdsRecommendationsService();