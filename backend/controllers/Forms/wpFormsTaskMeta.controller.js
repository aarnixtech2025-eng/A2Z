const wpFormsTaskMetaService = require(
  "../../services/Forms/wpFormsTaskMeta.service"
);

class WPFormsTaskMetaController {
  /**
   * Create Task Meta
   */
  async createTaskMeta(req, res, next) {
    try {
      const taskMeta =
        await wpFormsTaskMetaService.createTaskMeta(
          req.body
        );

      return res.status(201).json({
        success: true,
        message: "Task meta created successfully.",
        data: taskMeta,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get All Task Meta
   */
  async getAllTaskMeta(req, res, next) {
    try {
      const taskMeta =
        await wpFormsTaskMetaService.getAllTaskMeta();

      return res.status(200).json({
        success: true,
        data: taskMeta,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get Task Meta By ID
   */
  async getTaskMetaById(req, res, next) {
    try {
      const taskMeta =
        await wpFormsTaskMetaService.getTaskMetaById(
          req.params.id
        );

      if (!taskMeta) {
        return res.status(404).json({
          success: false,
          message: "Task meta not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: taskMeta,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update Task Meta
   */
  async updateTaskMeta(req, res, next) {
    try {
      const taskMeta =
        await wpFormsTaskMetaService.updateTaskMeta(
          req.params.id,
          req.body
        );

      if (!taskMeta) {
        return res.status(404).json({
          success: false,
          message: "Task meta not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Task meta updated successfully.",
        data: taskMeta,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Delete Task Meta
   */
  async deleteTaskMeta(req, res, next) {
    try {
      const deleted =
        await wpFormsTaskMetaService.deleteTaskMeta(
          req.params.id
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Task meta not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Task meta deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new WPFormsTaskMetaController();