const B2SUserContact = require("../../models/Social_Marketing/wpuz_b2s_user_contact");

/* =========================================================
   CREATE USER CONTACT
========================================================= */

const createUserContact = async (data) => {
  try {
    const contact = await B2SUserContact.create(data);

    return contact;
  } catch (error) {
    throw error;
  }
};

/* =========================================================
   GET ALL USER CONTACTS
========================================================= */

const getAllUserContacts = async () => {
  try {
    const contacts = await B2SUserContact.findAll({
      order: [["id", "DESC"]],
    });

    return contacts;
  } catch (error) {
    throw error;
  }
};

/* =========================================================
   GET USER CONTACT BY ID
========================================================= */

const getUserContactById = async (id) => {
  try {
    const contact = await B2SUserContact.findByPk(id);

    return contact;
  } catch (error) {
    throw error;
  }
};

/* =========================================================
   GET CONTACT BY BLOG USER ID
========================================================= */

const getUserContactByBlogUserId = async (blogUserId) => {
  try {
    const contacts = await B2SUserContact.findAll({
      where: {
        blog_user_id: blogUserId,
      },
      order: [["id", "DESC"]],
    });

    return contacts;
  } catch (error) {
    throw error;
  }
};

/* =========================================================
   CREATE OR UPDATE BY BLOG USER ID
========================================================= */

const createOrUpdateUserContact = async (blogUserId, data) => {
  try {
    const contact = await B2SUserContact.findOne({
      where: {
        blog_user_id: blogUserId,
      },
    });

    if (contact) {
      await contact.update({
        ...data,
        blog_user_id: blogUserId,
      });

      return {
        created: false,
        contact,
      };
    }

    const newContact = await B2SUserContact.create({
      ...data,
      blog_user_id: blogUserId,
    });

    return {
      created: true,
      contact: newContact,
    };
  } catch (error) {
    throw error;
  }
};

/* =========================================================
   UPDATE USER CONTACT
========================================================= */

const updateUserContact = async (id, data) => {
  try {
    const contact = await B2SUserContact.findByPk(id);

    if (!contact) {
      return null;
    }

    await contact.update(data);

    return contact;
  } catch (error) {
    throw error;
  }
};

/* =========================================================
   DELETE USER CONTACT
========================================================= */

const deleteUserContact = async (id) => {
  try {
    const contact = await B2SUserContact.findByPk(id);

    if (!contact) {
      return null;
    }

    await contact.destroy();

    return contact;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUserContact,
  getAllUserContacts,
  getUserContactById,
  getUserContactByBlogUserId,
  createOrUpdateUserContact,
  updateUserContact,
  deleteUserContact,
};