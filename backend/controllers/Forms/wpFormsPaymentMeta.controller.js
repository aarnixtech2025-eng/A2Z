const wpFormsPaymentMetaService = require(
  "../../services/Forms/wpFormsPaymentMeta.service"
);

class WPFormsPaymentMetaController {
  /**
   * Create Payment Meta
   */
  async createPaymentMeta(req, res, next) {
  try {
    console.log("REQUEST BODY:", req.body);

    const paymentMeta =
      await wpFormsPaymentMetaService.createPaymentMeta(
        req.body
      );

    return res.status(201).json({
      success: true,
      message: "Payment meta created successfully.",
      data: paymentMeta,
    });
  } catch (error) {
    console.log("ERROR NAME:", error.name);
    console.log("ERROR MESSAGE:", error.message);
    console.log("MYSQL ERROR:", error.parent);
    console.log("MYSQL ORIGINAL:", error.original);
    console.log("SQL:", error.sql);

    return res.status(500).json({
      success: false,
      message: error.message,
      mysqlError: error.parent?.sqlMessage,
      mysqlCode: error.parent?.code,
      sql: error.sql,
    });
  }
}

  /**
   * Get All Payment Meta
   */
  async getAllPaymentMeta(req, res, next) {
    try {
      const paymentMeta =
        await wpFormsPaymentMetaService.getAllPaymentMeta();

      return res.status(200).json({
        success: true,
        data: paymentMeta,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Payment Meta By ID
   */
  async getPaymentMetaById(req, res, next) {
    try {
      const paymentMeta =
        await wpFormsPaymentMetaService.getPaymentMetaById(
          req.params.id
        );

      if (!paymentMeta) {
        return res.status(404).json({
          success: false,
          message: "Payment meta not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: paymentMeta,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Meta By Payment ID
   */
  async getMetaByPaymentId(req, res, next) {
    try {
      const paymentMeta =
        await wpFormsPaymentMetaService.getMetaByPaymentId(
          req.params.paymentId
        );

      return res.status(200).json({
        success: true,
        data: paymentMeta,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update Payment Meta
   */
  async updatePaymentMeta(req, res, next) {
    try {
      const paymentMeta =
        await wpFormsPaymentMetaService.updatePaymentMeta(
          req.params.id,
          req.body
        );

      if (!paymentMeta) {
        return res.status(404).json({
          success: false,
          message: "Payment meta not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message:
          "Payment meta updated successfully.",
        data: paymentMeta,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete Payment Meta
   */
  async deletePaymentMeta(req, res, next) {
    try {
      const deleted =
        await wpFormsPaymentMetaService.deletePaymentMeta(
          req.params.id
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Payment meta not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message:
          "Payment meta deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports =
  new WPFormsPaymentMetaController();