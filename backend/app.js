const express = require("express");
require("dotenv").config();
const cors=require("cors")

const blogRoutes = require("./routes/blogRoutes");
const usersRoutes = require("./routes/Core/users.routes");
const postsRoutes = require("./routes/Core/posts.routes");
const commentRoutes = require("./routes/Core/comments.routes");
const termRoutes = require("./routes/Core/terms.routes");
const taxonomyRoutes = require("./routes/Core/termtaxonomy.routes");


// const postsRoutes = require("./routes/Core/posts.routes");
// const commentsRoutes = require("./routes/Core/comments.routes");
// const termsRoutes = require("./routes/Core/terms.routes");
// const optionsRoutes = require("./routes/Core/options.routes");

const app = express();
// console.log("argumnent problem")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // ✅ Enable CORS

// Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/terms", termRoutes);
app.use("/api/term-taxonomy", taxonomyRoutes);


app.get("/", (req, res) => {
  res.send("Server is Running");
});

module.exports = app;