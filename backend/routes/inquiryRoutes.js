const express = require("express");
const router = express.Router();

const {
  protect
} = require(
  "../middleware/authMiddleware"
);

const {
  createInquiry,
  getInquiries,
  updateInquiryStatus,
  deleteInquiry
} = require(
  "../controllers/inquiryController"
);

router.post("/", createInquiry);

router.get(
  "/",
  protect,
  getInquiries
);

router.put(
  "/:id/status",
  protect,
  updateInquiryStatus
);

router.delete(
  "/:id",
  protect,
  deleteInquiry
);

module.exports = router;