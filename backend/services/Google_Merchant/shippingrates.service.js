const {
  ShippingRates,
} = require("../../models/Google_Merchant");

class ShippingRatesService {
  // Create
  async createShippingRate(data) {
    return await ShippingRates.create(data);
  }

  // Get All
  async getAllShippingRates() {
    return await ShippingRates.findAll({
      order: [["id", "DESC"]],
    });
  }

  // Get By ID
  async getShippingRateById(id) {
    return await ShippingRates.findByPk(id);
  }

  // Update
  async updateShippingRate(id, data) {
    const shippingRate = await ShippingRates.findByPk(id);

    if (!shippingRate) return null;

    await shippingRate.update(data);

    return shippingRate;
  }

  // Delete
  async deleteShippingRate(id) {
    const shippingRate = await ShippingRates.findByPk(id);

    if (!shippingRate) return false;

    await shippingRate.destroy();

    return true;
  }
}

module.exports = new ShippingRatesService();