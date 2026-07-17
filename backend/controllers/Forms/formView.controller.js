const formViewService = require(
  "../../services/Forms/formView.service"
);

class FormViewController {
  /**
   * Create Form View
   */
  async createFormView(req, res, next) {
    try {
      const formView =
        await formViewService.createFormView(
          req.body
        );

      return res.status(201).json({
        success: true,
        message: "Form view created successfully.",
        data: formView,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get All Form Views
   */
  async getAllFormViews(req, res, next) {
    try {
      const formViews =
        await formViewService.getAllFormViews();

      return res.status(200).json({
        success: true,
        data: formViews,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Form View By ID
   */
  async getFormViewById(req, res, next) {
    try {
      const formView =
        await formViewService.getFormViewById(
          req.params.id
        );

      if (!formView) {
        return res.status(404).json({
          success: false,
          message: "Form view not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: formView,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update Form View
   */
  async updateFormView(req, res, next) {
    try {
      const formView =
        await formViewService.updateFormView(
          req.params.id,
          req.body
        );

      if (!formView) {
        return res.status(404).json({
          success: false,
          message: "Form view not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Form view updated successfully.",
        data: formView,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete Form View
   */
  async deleteFormView(req, res, next) {
    try {
      const deleted =
        await formViewService.deleteFormView(
          req.params.id
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Form view not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Form view deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new FormViewController();