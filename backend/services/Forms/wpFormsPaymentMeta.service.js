const WPFormsPaymentMeta = require(
  "../../models/Forms/wpuz_wpforms_payment_meta"
);

class WPFormsPaymentMetaService {
  async createPaymentMeta(data) {
    console.log("META DATA:", data);

    return await WPFormsPaymentMeta.create({
      payment_id: data.payment_id,
      meta_key: data.meta_key,
      meta_value: data.meta_value,
    });
  }

  async getAllPaymentMeta() {
    return await WPFormsPaymentMeta.findAll({
      order: [["id", "DESC"]],
    });
  }

  async getPaymentMetaById(id) {
    return await WPFormsPaymentMeta.findByPk(id);
  }

  async getMetaByPaymentId(paymentId) {
    return await WPFormsPaymentMeta.findAll({
      where: {
        payment_id: paymentId,
      },
      order: [["id", "ASC"]],
    });
  }

  async updatePaymentMeta(id, data) {
    const paymentMeta =
      await WPFormsPaymentMeta.findByPk(id);

    if (!paymentMeta) {
      return null;
    }

    await paymentMeta.update(data);

    return paymentMeta;
  }

  async deletePaymentMeta(id) {
    const paymentMeta =
      await WPFormsPaymentMeta.findByPk(id);

    if (!paymentMeta) {
      return null;
    }

    await paymentMeta.destroy();

    return true;
  }
}

module.exports = new WPFormsPaymentMetaService();