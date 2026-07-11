const shippingTimesService = require(
  "../../services/Google_Merchant/shippingtimes.service"
);

class ShippingTimesController {
  // Create
  async createShippingTime(req, res, next) {
    try {
      const shippingTime =
        await shippingTimesService.createShippingTime(req.body);

      return res.status(201).json({
        success: true,
        message: "Shipping Time created successfully.",
        data: shippingTime,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get All
  async getAllShippingTimes(req, res, next) {
    try {
      const shippingTimes =
        await shippingTimesService.getAllShippingTimes();

      return res.status(200).json({
        success: true,
        count: shippingTimes.length,
        data: shippingTimes,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get By ID
  async getShippingTimeById(req, res, next) {
    try {
      const shippingTime =
        await shippingTimesService.getShippingTimeById(
          req.params.id
        );

      if (!shippingTime) {
        return res.status(404).json({
          success: false,
          message: "Shipping Time not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: shippingTime,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update
  async updateShippingTime(req, res, next) {
    try {
      const shippingTime =
        await shippingTimesService.updateShippingTime(
          req.params.id,
          req.body
        );

      if (!shippingTime) {
        return res.status(404).json({
          success: false,
          message: "Shipping Time not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Shipping Time updated successfully.",
        data: shippingTime,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete
  async deleteShippingTime(req, res, next) {
    try {
      const deleted =
        await shippingTimesService.deleteShippingTime(
          req.params.id
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Shipping Time not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Shipping Time deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ShippingTimesController();