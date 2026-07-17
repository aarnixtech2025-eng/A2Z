const app = require("./app");

const {
  sequelize
} = require("./models");

const PORT =
  process.env.PORT || 5000;

(async () => {
  try {

    await sequelize.authenticate();

    console.log(
      "✅ Database Connected"
    );

    if (process.env.NODE_ENV === "production") {
      await sequelize.sync();
    } else {
      await sequelize.sync({ alter: true });
    }

    console.log(
      "✅ Models Synced"
    );

    app.listen(PORT, () => {
      console.log(
        `🚀 Server Running on Port ${PORT}`
      );
    });

  } catch (error) {
    console.log(error);
  }
})();