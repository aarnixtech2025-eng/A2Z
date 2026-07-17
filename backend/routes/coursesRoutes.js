const express = require("express");
const router = express.Router();

const upload = require(
  "../middleware/uploadMiddleware"
);

const {
  protect
} = require(
  "../middleware/authMiddleware"
);

const {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse
} = require(
  "../controllers/coursesController"
);

router.post(
  "/",
  upload.single("image"),
  createCourse
);

router.get("/", getCourses);

router.put(
  "/:id",
  protect,
  upload.single("image"),
  updateCourse
);

router.delete(
  "/:id",
  deleteCourse
);

module.exports = router;
