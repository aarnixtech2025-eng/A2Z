const FormReport = require(
  "../../models/Forms/wpuz_frmt_form_reports"
);

class FormReportService {
  /**
   * Create Form Report
   */
  async createFormReport(data) {
    return await FormReport.create(data);
  }

  /**
   * Get All Form Reports
   */
  async getAllFormReports() {
    return await FormReport.findAll({
      order: [["report_id", "DESC"]],
    });
  }

  /**
   * Get Form Report By ID
   */
  async getFormReportById(id) {
    return await FormReport.findByPk(id);
  }

  /**
   * Update Form Report
   */
  async updateFormReport(id, data) {
    const report = await FormReport.findByPk(id);

    if (!report) {
      return null;
    }

    await report.update(data);

    return report;
  }

  /**
   * Delete Form Report
   */
  async deleteFormReport(id) {
    const report = await FormReport.findByPk(id);

    if (!report) {
      return null;
    }

    await report.destroy();

    return true;
  }
}

module.exports = new FormReportService();