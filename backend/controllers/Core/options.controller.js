const optionService = require("../../services/Core/options.service");

class OptionController {
  // Create
  async createOption(req, res, next) {
    try {
      const option = await optionService.createOption(req.body);

      return res.status(201).json({
        success: true,
        message: "Option created successfully.",
        data: option,
      });
    } catch (error) {
      console.log("Error:", error);
      console.log("Original Error:", error.original);

      return res.status(500).json({
        success: false,
        message: error.message,
        sql: error.original?.sqlMessage,
        code: error.original?.code,
      });
    }
  }

  // Get All
  async getAllOptions(req, res, next) {
    try {
      const options = await optionService.getAllOptions();

      return res.status(200).json({
        success: true,
        count: options.length,
        data: options,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get By ID
  async getOptionById(req, res, next) {
    try {
      const option = await optionService.getOptionById(req.params.id);

      if (!option) {
        return res.status(404).json({
          success: false,
          message: "Option not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: option,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update
  async updateOption(req, res, next) {
    try {
      const option = await optionService.updateOption(
        req.params.id,
        req.body
      );

      if (!option) {
        return res.status(404).json({
          success: false,
          message: "Option not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Option updated successfully.",
        data: option,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete
  async deleteOption(req, res, next) {
    try {
      const deleted = await optionService.deleteOption(req.params.id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Option not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Option deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OptionController();