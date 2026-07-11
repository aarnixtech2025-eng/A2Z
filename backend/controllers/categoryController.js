// const Category = require("../models/Blog/categories.js");

// // Create Category
// exports.createCategory = async (req, res) => {
//   try {
//     console.log(req.body);

//     const category = await Category.create({
//       name: req.body.name,
//       slug: req.body.slug,
//       description: req.body.description,
//       parentId: req.body.parentId || null,
//       status: req.body.status || "Active",
//     });

//     res.status(201).json({
//       success: true,
//       data: category,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Get All Categories
// exports.getAllCategories = async (req, res) => {
//   try {
//     const categories = await Category.findAll({
//       order: [["createdAt", "DESC"]],
//     });

//     res.status(200).json({
//       success: true,
//       count: categories.length,
//       data: categories,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Get Single Category
// exports.getCategoryById = async (req, res) => {
//   try {
//     const category = await Category.findByPk(req.params.id);

//     if (!category) {
//       return res.status(404).json({
//         success: false,
//         message: "Category not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: category,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Update Category
// exports.updateCategory = async (req, res) => {
//   try {
//     const category = await Category.findByPk(req.params.id);

//     if (!category) {
//       return res.status(404).json({
//         success: false,
//         message: "Category not found",
//       });
//     }

//     const updateData = {
//       name: req.body.name,
//       slug: req.body.slug,
//       description: req.body.description,
//       parentId: req.body.parentId || null,
//       status: req.body.status,
//     };

//     await category.update(updateData);

//     res.status(200).json({
//       success: true,
//       message: "Category updated successfully",
//       data: category,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Delete Category
// exports.deleteCategory = async (req, res) => {
//   try {
//     const category = await Category.findByPk(req.params.id);

//     if (!category) {
//       return res.status(404).json({
//         success: false,
//         message: "Category not found",
//       });
//     }

//     await category.destroy();

//     res.status(200).json({
//       success: true,
//       message: "Category deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
