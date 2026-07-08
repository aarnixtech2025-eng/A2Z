const termService = require("../../services/Core/terms.service");

class TermController {
  async createTerm(req, res, next) {
    try {
      const term = await termService.createTerm(req.body);

      return res.status(201).json({
        success: true,
        message: "Term created successfully.",
        data: term,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllTerms(req, res, next) {
    try {
      const terms = await termService.getAllTerms();

      return res.status(200).json({
        success: true,
        data: terms,
      });
    } catch (error) {
      next(error);
    }
  }

  async getTermById(req, res, next) {
    try {
      const term = await termService.getTermById(req.params.id);

      if (!term) {
        return res.status(404).json({
          success: false,
          message: "Term not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: term,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateTerm(req, res, next) {
    try {
      const term = await termService.updateTerm(
        req.params.id,
        req.body
      );

      if (!term) {
        return res.status(404).json({
          success: false,
          message: "Term not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Term updated successfully.",
        data: term,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteTerm(req, res, next) {
    try {
      const deleted = await termService.deleteTerm(req.params.id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Term not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Term deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TermController();