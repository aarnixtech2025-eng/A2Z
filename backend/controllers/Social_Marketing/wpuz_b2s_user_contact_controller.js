const userContactService = require(
  "../../services/Social_Marketing/wpuz_b2s_user_contact_service"
);

/* =========================================================
   CREATE USER CONTACT
========================================================= */

const createUserContact = async (req, res) => {
  try {
    const contact = await userContactService.createUserContact(req.body);

    return res.status(201).json({
      success: true,
      message: "User contact created successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Create User Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create user contact",
      error: error.message,
    });
  }
};

/* =========================================================
   GET ALL USER CONTACTS
========================================================= */

const getAllUserContacts = async (req, res) => {
  try {
    const contacts = await userContactService.getAllUserContacts();

    return res.status(200).json({
      success: true,
      message: "User contacts fetched successfully",
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("Get All User Contacts Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch user contacts",
      error: error.message,
    });
  }
};

/* =========================================================
   GET USER CONTACT BY ID
========================================================= */

const getUserContactById = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await userContactService.getUserContactById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "User contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User contact fetched successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Get User Contact By ID Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch user contact",
      error: error.message,
    });
  }
};

/* =========================================================
   GET CONTACT BY BLOG USER ID
========================================================= */

const getUserContactByBlogUserId = async (req, res) => {
  try {
    const { blogUserId } = req.params;

    const contacts =
      await userContactService.getUserContactByBlogUserId(blogUserId);

    return res.status(200).json({
      success: true,
      message: "User contacts fetched successfully",
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("Get Contact By Blog User ID Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch user contacts",
      error: error.message,
    });
  }
};

/* =========================================================
   CREATE OR UPDATE BY BLOG USER ID
========================================================= */

const createOrUpdateUserContact = async (req, res) => {
  try {
    const { blogUserId } = req.params;

    const result =
      await userContactService.createOrUpdateUserContact(
        blogUserId,
        req.body
      );

    return res.status(result.created ? 201 : 200).json({
      success: true,
      message: result.created
        ? "User contact created successfully"
        : "User contact updated successfully",
      data: result.contact,
    });
  } catch (error) {
    console.error("Create Or Update User Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to save user contact",
      error: error.message,
    });
  }
};

/* =========================================================
   UPDATE USER CONTACT
========================================================= */

const updateUserContact = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await userContactService.updateUserContact(
      id,
      req.body
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "User contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User contact updated successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Update User Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update user contact",
      error: error.message,
    });
  }
};

/* =========================================================
   DELETE USER CONTACT
========================================================= */

const deleteUserContact = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await userContactService.deleteUserContact(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "User contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User contact deleted successfully",
    });
  } catch (error) {
    console.error("Delete User Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete user contact",
      error: error.message,
    });
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