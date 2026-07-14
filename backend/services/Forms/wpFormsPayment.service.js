const {
  WPFormsPayment,
  WPFormsPaymentMeta,
} = require("../../models/Forms");

class WPFormsPaymentService {
  /**
   * Create Payment
   */
  async createPayment(data) {
    const { meta, ...paymentData } = data;

    const payment = await WPFormsPayment.create(
      paymentData
    );

    if (
      Array.isArray(meta) &&
      meta.length > 0
    ) {
      const paymentMetaData = meta.map(
        (item) => ({
          payment_id: payment.id,
          meta_key: item.meta_key,
          meta_value: item.meta_value,
        })
      );

      await WPFormsPaymentMeta.bulkCreate(
        paymentMetaData
      );
    }

    return await this.getPaymentById(payment.id);
  }

  /**
   * Get All Payments With Meta
   */
  async getAllPayments() {
    return await WPFormsPayment.findAll({
      include: [
        {
          model: WPFormsPaymentMeta,
          as: "meta",
          required: false,
        },
      ],

      order: [["id", "DESC"]],
    });
  }

  /**
   * Get Payment By ID With Meta
   */
  async getPaymentById(id) {
    return await WPFormsPayment.findByPk(id, {
      include: [
        {
          model: WPFormsPaymentMeta,
          as: "meta",
          required: false,
        },
      ],
    });
  }

  /**
   * Update Payment
   */
  async updatePayment(id, data) {
    const payment =
      await WPFormsPayment.findByPk(id);

    if (!payment) {
      return null;
    }

    const { meta, ...paymentData } = data;

    await payment.update(paymentData);

    if (Array.isArray(meta)) {
      await WPFormsPaymentMeta.destroy({
        where: {
          payment_id: id,
        },
      });

      if (meta.length > 0) {
        const paymentMetaData = meta.map(
          (item) => ({
            payment_id: id,
            meta_key: item.meta_key,
            meta_value: item.meta_value,
          })
        );

        await WPFormsPaymentMeta.bulkCreate(
          paymentMetaData
        );
      }
    }

    return await this.getPaymentById(id);
  }

  /**
   * Delete Payment
   */
  async deletePayment(id) {
    const payment =
      await WPFormsPayment.findByPk(id);

    if (!payment) {
      return null;
    }

    await WPFormsPaymentMeta.destroy({
      where: {
        payment_id: id,
      },
    });

    await payment.destroy();

    return true;
  }
}

module.exports = new WPFormsPaymentService();