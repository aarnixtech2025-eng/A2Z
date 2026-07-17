const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Admin } = require("../models");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hardcoded fallback credentials in case seeder fails
    const HARDCODED_EMAIL = "superadmin@example.com";
    const HARDCODED_PASSWORD = "admin@123";

    const admin = await Admin.findOne({
      where: { email }
    });

    if (!admin) {
      // Fallback to hardcoded credentials if admin not found in database
      if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
        const token = jwt.sign(
          {
            id: 1,
            role: "admin"
          },
          process.env.JWT_SECRET,
          {
            expiresIn: process.env.JWT_EXPIRES
          }
        );

        return res.status(200).json({
          success: true,
          token
        });
      }

      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const match = await bcrypt.compare(
      password,
      admin.password
    );

    if (!match) {
      // Fallback to hardcoded credentials if password doesn't match
      if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
        const token = jwt.sign(
          {
            id: admin.id,
            role: admin.role
          },
          process.env.JWT_SECRET,
          {
            expiresIn: process.env.JWT_EXPIRES
          }
        );

        return res.status(200).json({
          success: true,
          token
        });
      }

      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        role: admin.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES
      }
    );

    res.status(200).json({
      success: true,
      token
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.admin.id);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found"
      });
    }

    res.status(200).json({
      success: true,
      data: {
        id: admin.id,
        email: admin.email,
        role: admin.role,
        createdAt: admin.createdAt
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;
    const admin = await Admin.findByPk(req.admin.id);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found"
      });
    }

    // If changing password, verify current password
    if (newPassword) {
      if (!currentPassword) {
        return res.status(400).json({
          success: false,
          message: "Current password is required to change password"
        });
      }

      const match = await bcrypt.compare(currentPassword, admin.password);
      if (!match) {
        return res.status(400).json({
          success: false,
          message: "Current password is incorrect"
        });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await admin.update({ password: hashedPassword });
    }

    // Update email if provided
    if (email && email !== admin.email) {
      const existingAdmin = await Admin.findOne({ where: { email } });
      if (existingAdmin) {
        return res.status(400).json({
          success: false,
          message: "Email already in use"
        });
      }
      await admin.update({ email });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: {
        id: admin.id,
        email: admin.email,
        role: admin.role
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const admin = await Admin.findOne({
      where: { email }
    });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin with this email not found"
      });
    }

    // Generate a temporary reset token (in production, send via email)
    const resetToken = jwt.sign(
      { id: admin.id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.status(200).json({
      success: true,
      message: "Password reset token generated",
      resetToken
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findByPk(decoded.id);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found"
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await admin.update({ password: hashedPassword });

    res.status(200).json({
      success: true,
      message: "Password reset successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.forgotEmail = async (req, res) => {
  try {
    const { password } = req.body;

    const admins = await Admin.findAll();
    let matchedAdmin = null;

    for (const admin of admins) {
      const match = await bcrypt.compare(password, admin.password);
      if (match) {
        matchedAdmin = admin;
        break;
      }
    }

    if (!matchedAdmin) {
      return res.status(404).json({
        success: false,
        message: "Admin with this password not found"
      });
    }

    // Generate a temporary email update token (in production, send via email)
    const emailToken = jwt.sign(
      { id: matchedAdmin.id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.status(200).json({
      success: true,
      message: "Email update token generated",
      emailToken
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateEmail = async (req, res) => {
  try {
    const { token, newEmail } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findByPk(decoded.id);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found"
      });
    }

    // Check if new email is already in use
    const existingAdmin = await Admin.findOne({ where: { email: newEmail } });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Email already in use"
      });
    }

    await admin.update({ email: newEmail });

    res.status(200).json({
      success: true,
      message: "Email updated successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};