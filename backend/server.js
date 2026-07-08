require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/database");


const PORT = process.env.PORT || 5000;

(async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    // Create/Update tables
    await sequelize.sync();
    // await sequelize.authenticate();
    console.log("✅ Database Connected");
    // Don't alter existing WordPress tables
    await sequelize.sync();
    console.log("✅ Models Synced");

    app.listen(PORT, () => {
      console.log(`🚀 Server Running on Port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server Error:", error);
  }
})();
