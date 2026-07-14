const WPFormsTaskMeta = require(
  "../../models/Forms/wpuz_wpforms_tasks_meta"
);

class WPFormsTaskMetaService {
  /**
   * Create Task Meta
   */
  async createTaskMeta(data) {
    return await WPFormsTaskMeta.create(data);
  }

  /**
   * Get All Task Meta
   */
  async getAllTaskMeta() {
    return await WPFormsTaskMeta.findAll({
      order: [["id", "DESC"]],
    });
  }

  /**
   * Get Task Meta By ID
   */
  async getTaskMetaById(id) {
    return await WPFormsTaskMeta.findByPk(id);
  }

  /**
   * Update Task Meta
   */
  async updateTaskMeta(id, data) {
    const taskMeta = await WPFormsTaskMeta.findByPk(id);

    if (!taskMeta) {
      return null;
    }

    await taskMeta.update(data);

    return taskMeta;
  }

  /**
   * Delete Task Meta
   */
  async deleteTaskMeta(id) {
    const taskMeta = await WPFormsTaskMeta.findByPk(id);

    if (!taskMeta) {
      return null;
    }

    await taskMeta.destroy();

    return true;
  }
}

module.exports = new WPFormsTaskMetaService();