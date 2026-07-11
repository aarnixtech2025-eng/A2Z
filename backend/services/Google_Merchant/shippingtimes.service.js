const {
  ShippingTimes,
} = require("../../models/Google_Merchant");

class ShippingTimesService {
  // Create
  async createShippingTime(data) {
    return await ShippingTimes.create(data);
  }

  // Get All
  async getAllShippingTimes() {
    return await ShippingTimes.findAll({
      order: [["id", "DESC"]],
    });
  }

  // Get By ID
  async getShippingTimeById(id) {
    return await ShippingTimes.findByPk(id);
  }

  // Update
  async updateShippingTime(id, data) {
    const shippingTime = await ShippingTimes.findByPk(id);

    if (!shippingTime) return null;

    await shippingTime.update(data);

    return shippingTime;
  }

  // Delete
  async deleteShippingTime(id) {
    const shippingTime = await ShippingTimes.findByPk(id);

    if (!shippingTime) return false;

    await shippingTime.destroy();

    return true;
  }
}

module.exports = new ShippingTimesService();