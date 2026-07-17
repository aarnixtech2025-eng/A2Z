const { Blog } = require("../models");
const { Op } = require("sequelize");
const slugify = require("slugify");

exports.createBlog = async (req, res) => {
  try {
    const {
      title,
      shortDescription,
      content,
      status
    } = req.body;

    const slug = slugify(title, {
      lower: true,
      strict: true
    });

    const blog = await Blog.create({
      title,
      slug,
      shortDescription,
      content,
      image: req.file ? req.file.filename : (req.body.image || null),
      status,
      createdBy: req.admin.id
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog
    });

  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    console.log("Fetching blogs from database...");
    const blogs = await Blog.findAll({
      order: [["createdAt", "DESC"]]
    });
    console.log("Blogs fetched successfully:", blogs.length);

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs
    });

  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getBlog = async (req, res) => {
  try {

    const blog = await Blog.findByPk(
      req.params.id
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.status(200).json({
      success: true,
      data: blog
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {

    const blog = await Blog.findByPk(
      req.params.id
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    const slug = slugify(req.body.title, {
      lower: true,
      strict: true
    });

    await blog.update({
      ...req.body,
      slug,
      image: req.file ? req.file.filename : (req.body.image || blog.image)
    });

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {

    const blog = await Blog.findByPk(
      req.params.id
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    await blog.destroy();

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};