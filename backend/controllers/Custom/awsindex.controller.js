const awsIndexService = require("../../services/Custom/awsindex.service");

class AwsIndexController {
  async createAwsIndex(req, res, next) {
    try {
      const data = await awsIndexService.createAwsIndex(req.body);

      return res.status(201).json({
        success: true,
        message: "Aws Index created successfully.",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllAwsIndex(req, res, next) {
    try {
      const data = await awsIndexService.getAllAwsIndex();

      return res.status(200).json({
        success: true,
        count: data.length,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAwsIndexById(req, res, next) {
    try {
      const data = await awsIndexService.getAwsIndexById(req.params.id);

      if (!data) {
        return res.status(404).json({
          success: false,
          message: "Record not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateAwsIndex(req, res, next) {
    try {
      const data = await awsIndexService.updateAwsIndex(
        req.params.id,
        req.body
      );

      if (!data) {
        return res.status(404).json({
          success: false,
          message: "Record not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Updated successfully.",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteAwsIndex(req, res, next) {
    try {
      const deleted = await awsIndexService.deleteAwsIndex(req.params.id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Record not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AwsIndexController();