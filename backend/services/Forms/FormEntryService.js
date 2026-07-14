const {
  FormEntry,
  FormEntryMeta,
} = require("../../models/Forms");

class FormEntryService {
  /**
   * Create Form Entry
   */
  async createFormEntry(data) {
    const {
      meta,
      ...entryData
    } = data;

    const entry = await FormEntry.create(entryData);

    if (
      meta &&
      Array.isArray(meta) &&
      meta.length > 0
    ) {
      const metaData = meta.map((item) => ({
        entry_id: entry.entry_id,
        meta_key: item.meta_key,
        meta_value: item.meta_value,
        date_created: new Date(),
        date_updated: new Date(),
      }));

      await FormEntryMeta.bulkCreate(metaData);
    }

    return await this.getFormEntryById(
      entry.entry_id
    );
  }

  /**
   * Get All Form Entries
   */
  async getAllFormEntries() {
    return await FormEntry.findAll({
      include: [
        {
          model: FormEntryMeta,
          as: "meta",
          attributes: [
            "meta_id",
            "entry_id",
            "meta_key",
            "meta_value",
            "date_created",
            "date_updated",
          ],
        },
      ],

      order: [["entry_id", "DESC"]],
    });
  }

  /**
   * Get Form Entry By ID
   */
  async getFormEntryById(id) {
    return await FormEntry.findByPk(id, {
      include: [
        {
          model: FormEntryMeta,
          as: "meta",
          attributes: [
            "meta_id",
            "entry_id",
            "meta_key",
            "meta_value",
            "date_created",
            "date_updated",
          ],
        },
      ],
    });
  }

  /**
   * Update Form Entry
   */
  async updateFormEntry(id, data) {
    const entry = await FormEntry.findByPk(id);

    if (!entry) {
      return null;
    }

    const {
      meta,
      ...entryData
    } = data;

    await entry.update(entryData);

    if (meta && Array.isArray(meta)) {
      await FormEntryMeta.destroy({
        where: {
          entry_id: id,
        },
      });

      if (meta.length > 0) {
        const metaData = meta.map((item) => ({
          entry_id: id,
          meta_key: item.meta_key,
          meta_value: item.meta_value,
          date_created: new Date(),
          date_updated: new Date(),
        }));

        await FormEntryMeta.bulkCreate(metaData);
      }
    }

    return await this.getFormEntryById(id);
  }

  /**
   * Delete Form Entry
   */
  async deleteFormEntry(id) {
    const entry = await FormEntry.findByPk(id);

    if (!entry) {
      return null;
    }

    await FormEntryMeta.destroy({
      where: {
        entry_id: id,
      },
    });

    await entry.destroy();

    return true;
  }
}

module.exports = new FormEntryService();