require("dotenv").config();

const bcrypt = require(
  "bcryptjs"
);

const {
  Admin,
  sequelize
} = require("../models");

(async () => {

  try {

    await sequelize.sync();

    const hash =
      await bcrypt.hash(
        "admin123",
        10
      );

    await Admin.create({
      name: "Super Admin",
      email:
        "admin@example.com",
      password: hash,
      role: "admin"
    });

    console.log(
      "Admin Created"
    );

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit();
  }

})();