const merchantIssuesService = require("../../services/Google_Merchant/merchantissues.service");

class MerchantIssuesController {
  // Create
  async createIssue(req, res, next) {
    try {
      const issue = await merchantIssuesService.createIssue(req.body);

      return res.status(201).json({
        success: true,
        message: "Merchant Issue created successfully.",
        data: issue,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get All
  async getAllIssues(req, res, next) {
    try {
      const issues = await merchantIssuesService.getAllIssues();

      return res.status(200).json({
        success: true,
        count: issues.length,
        data: issues,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get By ID
  async getIssueById(req, res, next) {
    try {
      const issue = await merchantIssuesService.getIssueById(req.params.id);

      if (!issue) {
        return res.status(404).json({
          success: false,
          message: "Merchant Issue not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: issue,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update
  async updateIssue(req, res, next) {
    try {
      const issue = await merchantIssuesService.updateIssue(
        req.params.id,
        req.body
      );

      if (!issue) {
        return res.status(404).json({
          success: false,
          message: "Merchant Issue not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Merchant Issue updated successfully.",
        data: issue,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete
  async deleteIssue(req, res, next) {
    try {
      const deleted = await merchantIssuesService.deleteIssue(req.params.id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Merchant Issue not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Merchant Issue deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new MerchantIssuesController();