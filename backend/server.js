require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    // ✅ Only test connection
    await sequelize.authenticate();
    console.log("✅ Database Connected");

    // ❌ REMOVE THIS (VERY IMPORTANT)
    // await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`🚀 Server Running on Port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Server Error:", error);
  }
})();