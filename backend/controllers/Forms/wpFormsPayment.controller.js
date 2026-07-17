const wpFormsPaymentService = require(
  "../../services/Forms/wpFormsPayment.service"
);

class WPFormsPaymentController {
  /**
   * Create Payment
   */
  async createPayment(req, res, next) {
    try {
      const payment =
        await wpFormsPaymentService.createPayment(
          req.body
        );

      return res.status(201).json({
        success: true,
        message: "Payment created successfully.",
        data: payment,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get All Payments
   */
  async getAllPayments(req, res, next) {
    try {
      const payments =
        await wpFormsPaymentService.getAllPayments();

      return res.status(200).json({
        success: true,
        data: payments,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Payment By ID
   */
  async getPaymentById(req, res, next) {
    try {
      const payment =
        await wpFormsPaymentService.getPaymentById(
          req.params.id
        );

      if (!payment) {
        return res.status(404).json({
          success: false,
          message: "Payment not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: payment,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update Payment
   */
  async updatePayment(req, res, next) {
    try {
      const payment =
        await wpFormsPaymentService.updatePayment(
          req.params.id,
          req.body
        );

      if (!payment) {
        return res.status(404).json({
          success: false,
          message: "Payment not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Payment updated successfully.",
        data: payment,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete Payment
   */
  async deletePayment(req, res, next) {
    try {
      const deleted =
        await wpFormsPaymentService.deletePayment(
          req.params.id
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Payment not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Payment deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new WPFormsPaymentController();