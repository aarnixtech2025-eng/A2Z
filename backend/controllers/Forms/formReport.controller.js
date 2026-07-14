const formReportService = require(
  "../../services/Forms/formReport.service"
);

class FormReportController {
  /**
   * Create Form Report
   */
  async createFormReport(req, res, next) {
    try {
      const report =
        await formReportService.createFormReport(
          req.body
        );

      return res.status(201).json({
        success: true,
        message: "Form report created successfully.",
        data: report,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get All Form Reports
   */
  async getAllFormReports(req, res, next) {
    try {
      const reports =
        await formReportService.getAllFormReports();

      return res.status(200).json({
        success: true,
        data: reports,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Form Report By ID
   */
  async getFormReportById(req, res, next) {
    try {
      const report =
        await formReportService.getFormReportById(
          req.params.id
        );

      if (!report) {
        return res.status(404).json({
          success: false,
          message: "Form report not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: report,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update Form Report
   */
  async updateFormReport(req, res, next) {
    try {
      const report =
        await formReportService.updateFormReport(
          req.params.id,
          req.body
        );

      if (!report) {
        return res.status(404).json({
          success: false,
          message: "Form report not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Form report updated successfully.",
        data: report,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete Form Report
   */
  async deleteFormReport(req, res, next) {
    try {
      const deleted =
        await formReportService.deleteFormReport(
          req.params.id
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Form report not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Form report deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new FormReportController();