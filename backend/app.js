const express = require("express");
require("dotenv").config
// const blogRoutes = require("./routes/blogRoutes");


const app = express();

app.use(express.json());
// app.use("/api/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.send("Server is Running");
});

module.exports = app;