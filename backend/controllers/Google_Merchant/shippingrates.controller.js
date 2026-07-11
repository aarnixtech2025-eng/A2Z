const shippingRatesService = require(
  "../../services/Google_Merchant/shippingrates.service"
);

class ShippingRatesController {
  // Create
  async createShippingRate(req, res, next) {
    try {
      const shippingRate =
        await shippingRatesService.createShippingRate(req.body);

      return res.status(201).json({
        success: true,
        message: "Shipping Rate created successfully.",
        data: shippingRate,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get All
  async getAllShippingRates(req, res, next) {
    try {
      const shippingRates =
        await shippingRatesService.getAllShippingRates();

      return res.status(200).json({
        success: true,
        count: shippingRates.length,
        data: shippingRates,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get By ID
  async getShippingRateById(req, res, next) {
    try {
      const shippingRate =
        await shippingRatesService.getShippingRateById(
          req.params.id
        );

      if (!shippingRate) {
        return res.status(404).json({
          success: false,
          message: "Shipping Rate not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: shippingRate,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update
  async updateShippingRate(req, res, next) {
    try {
      const shippingRate =
        await shippingRatesService.updateShippingRate(
          req.params.id,
          req.body
        );

      if (!shippingRate) {
        return res.status(404).json({
          success: false,
          message: "Shipping Rate not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Shipping Rate updated successfully.",
        data: shippingRate,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete
  async deleteShippingRate(req, res, next) {
    try {
      const deleted =
        await shippingRatesService.deleteShippingRate(
          req.params.id
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Shipping Rate not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Shipping Rate deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ShippingRatesController();