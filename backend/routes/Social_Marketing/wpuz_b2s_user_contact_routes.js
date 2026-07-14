const express = require("express");

const router = express.Router();

const {
  createUserContact,
  getAllUserContacts,
  getUserContactById,
  getUserContactByBlogUserId,
  createOrUpdateUserContact,
  updateUserContact,
  deleteUserContact,
} = require(
  "../../controllers/Social_Marketing/wpuz_b2s_user_contact_controller"
);

/* =========================================================
   USER CONTACT ROUTES
========================================================= */

/* CREATE */

router.post("/", createUserContact);

/* GET ALL */

router.get("/", getAllUserContacts);

/* GET BY BLOG USER ID */

router.get(
  "/blog-user/:blogUserId",
  getUserContactByBlogUserId
);

/* CREATE OR UPDATE BY BLOG USER ID */

router.put(
  "/blog-user/:blogUserId",
  createOrUpdateUserContact
);

/* GET BY ID */

router.get("/:id", getUserContactById);

/* UPDATE BY ID */

router.put("/:id", updateUserContact);

/* DELETE BY ID */

router.delete("/:id", deleteUserContact);

module.exports = router;