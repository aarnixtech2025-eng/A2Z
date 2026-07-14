const formEntryService = require("../../services/Forms/FormEntryService");

class FormEntryController {
  /**
   * Create Form Entry
   */
  async createFormEntry(req, res, next) {
    try {
      const entry =
        await formEntryService.createFormEntry(
          req.body
        );

      return res.status(201).json({
        success: true,
        message:
          "Form entry created successfully.",
        data: entry,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get All Form Entries
   */
  async getAllFormEntries(req, res, next) {
    try {
      const entries =
        await formEntryService.getAllFormEntries();

      return res.status(200).json({
        success: true,
        data: entries,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Form Entry By ID
   */
  async getFormEntryById(req, res, next) {
    try {
      const entry =
        await formEntryService.getFormEntryById(
          req.params.id
        );

      if (!entry) {
        return res.status(404).json({
          success: false,
          message: "Form entry not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: entry,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update Form Entry
   */
  async updateFormEntry(req, res, next) {
    try {
      const entry =
        await formEntryService.updateFormEntry(
          req.params.id,
          req.body
        );

      if (!entry) {
        return res.status(404).json({
          success: false,
          message: "Form entry not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message:
          "Form entry updated successfully.",
        data: entry,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete Form Entry
   */
  async deleteFormEntry(req, res, next) {
    try {
      const deleted =
        await formEntryService.deleteFormEntry(
          req.params.id
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Form entry not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message:
          "Form entry deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new FormEntryController();