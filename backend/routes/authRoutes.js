const express = require("express");
const router = express.Router();

const {
  login,
  getAdminProfile,
  updateProfile,
  forgotPassword,
  resetPassword,
  forgotEmail,
  updateEmail
} = require("../controllers/authController");

const {
  loginValidation
} = require("../validations/authValidation");

const {
  protect
} = require("../middleware/authMiddleware");

const validate = require(
  "../middleware/validationMiddleware"
);

router.post(
  "/login",
  loginValidation,
  validate,
  login
);

router.get(
  "/profile",
  protect,
  getAdminProfile
);

router.put(
  "/profile",
  protect,
  updateProfile
);

router.post(
  "/forgot-password",
  forgotPassword
);

router.post(
  "/reset-password",
  resetPassword
);

router.post(
  "/forgot-email",
  forgotEmail
);

router.post(
  "/update-email",
  updateEmail
);

module.exports = router;