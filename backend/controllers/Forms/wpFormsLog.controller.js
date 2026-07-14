const wpFormsLogService = require(
  "../../services/Forms/wpFormsLog.service"
);

class WPFormsLogController {
  /**
   * Create Log
   */
  async createLog(req, res, next) {
    try {
      const log =
        await wpFormsLogService.createLog(
          req.body
        );

      return res.status(201).json({
        success: true,
        message: "Log created successfully.",
        data: log,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get All Logs
   */
  async getAllLogs(req, res, next) {
    try {
      const logs =
        await wpFormsLogService.getAllLogs();

      return res.status(200).json({
        success: true,
        data: logs,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Log By ID
   */
  async getLogById(req, res, next) {
    try {
      const log =
        await wpFormsLogService.getLogById(
          req.params.id
        );

      if (!log) {
        return res.status(404).json({
          success: false,
          message: "Log not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: log,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Logs By Form ID
   */
  async getLogsByFormId(req, res, next) {
    try {
      const logs =
        await wpFormsLogService.getLogsByFormId(
          req.params.formId
        );

      return res.status(200).json({
        success: true,
        data: logs,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Logs By Entry ID
   */
  async getLogsByEntryId(req, res, next) {
    try {
      const logs =
        await wpFormsLogService.getLogsByEntryId(
          req.params.entryId
        );

      return res.status(200).json({
        success: true,
        data: logs,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Logs By User ID
   */
  async getLogsByUserId(req, res, next) {
    try {
      const logs =
        await wpFormsLogService.getLogsByUserId(
          req.params.userId
        );

      return res.status(200).json({
        success: true,
        data: logs,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update Log
   */
  async updateLog(req, res, next) {
    try {
      const log =
        await wpFormsLogService.updateLog(
          req.params.id,
          req.body
        );

      if (!log) {
        return res.status(404).json({
          success: false,
          message: "Log not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Log updated successfully.",
        data: log,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete Log
   */
  async deleteLog(req, res, next) {
    try {
      const deleted =
        await wpFormsLogService.deleteLog(
          req.params.id
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Log not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Log deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new WPFormsLogController();