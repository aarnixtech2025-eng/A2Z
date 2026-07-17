const WPFormsLog = require(
  "../../models/Forms/wpuz_wpforms_logs"
);

class WPFormsLogService {
  /**
   * Create Log
   */
  async createLog(data) {
    return await WPFormsLog.create(data);
  }

  /**
   * Get All Logs
   */
  async getAllLogs() {
    return await WPFormsLog.findAll({
      order: [["id", "DESC"]],
    });
  }

  /**
   * Get Log By ID
   */
  async getLogById(id) {
    return await WPFormsLog.findByPk(id);
  }

  /**
   * Get Logs By Form ID
   */
  async getLogsByFormId(formId) {
    return await WPFormsLog.findAll({
      where: {
        form_id: formId,
      },
      order: [["id", "DESC"]],
    });
  }

  /**
   * Get Logs By Entry ID
   */
  async getLogsByEntryId(entryId) {
    return await WPFormsLog.findAll({
      where: {
        entry_id: entryId,
      },
      order: [["id", "DESC"]],
    });
  }

  /**
   * Get Logs By User ID
   */
  async getLogsByUserId(userId) {
    return await WPFormsLog.findAll({
      where: {
        user_id: userId,
      },
      order: [["id", "DESC"]],
    });
  }

  /**
   * Update Log
   */
  async updateLog(id, data) {
    const log = await WPFormsLog.findByPk(id);

    if (!log) {
      return null;
    }

    await log.update(data);

    return log;
  }

  /**
   * Delete Log
   */
  async deleteLog(id) {
    const log = await WPFormsLog.findByPk(id);

    if (!log) {
      return null;
    }

    await log.destroy();

    return true;
  }
}

module.exports = new WPFormsLogService();