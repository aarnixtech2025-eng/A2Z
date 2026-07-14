const FormView = require(
  "../../models/Forms/wpuz_frmt_form_views"
);

class FormViewService {
  /**
   * Create Form View
   */
  async createFormView(data) {
    return await FormView.create(data);
  }

  /**
   * Get All Form Views
   */
  async getAllFormViews() {
    return await FormView.findAll({
      order: [["view_id", "DESC"]],
    });
  }

  /**
   * Get Form View By ID
   */
  async getFormViewById(id) {
    return await FormView.findByPk(id);
  }

  /**
   * Update Form View
   */
  async updateFormView(id, data) {
    const formView = await FormView.findByPk(id);

    if (!formView) {
      return null;
    }

    await formView.update(data);

    return formView;
  }

  /**
   * Delete Form View
   */
  async deleteFormView(id) {
    const formView = await FormView.findByPk(id);

    if (!formView) {
      return null;
    }

    await formView.destroy();

    return true;
  }
}

module.exports = new FormViewService();