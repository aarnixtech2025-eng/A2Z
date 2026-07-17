const { Course } = require("../models");

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      title: req.body.title,
      description: req.body.description,
      image: req.file ? req.file.filename : null
    });

    res.status(201).json({
      success: true,
      message: "Course added",
      data: course
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      order: [["createdAt", "DESC"]]
    });

    res.status(200).json({
      success: true,
      data: courses
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }

    await course.update({
      title: req.body.title,
      description: req.body.description,
      image: req.file ? req.file.filename : course.image
    });

    res.status(200).json({
      success: true,
      message: "Course updated",
      data: course
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }

    await course.destroy();

    res.status(200).json({
      success: true,
      message: "Course deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
