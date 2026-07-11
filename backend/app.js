const express = require("express");
require("dotenv").config();
const cors = require("cors");
//Blog
const blogRoutes = require("./routes/blogRoutes");
//Core
const usersRoutes = require("./routes/Core/users.routes");
const postsRoutes = require("./routes/Core/posts.routes");
const commentRoutes = require("./routes/Core/comments.routes");
const termRoutes = require("./routes/Core/terms.routes");
const taxonomyRoutes = require("./routes/Core/termtaxonomy.routes");
const termRelationshipRoutes = require("./routes/Core/termrelationships.routes");
const linkRoutes = require("./routes/Core/links.routes");
const optionRoutes = require("./routes/Core/options.routes");
//Custom
const awsIndexRoutes = require("./routes/Custom/awsindex.routes");
const a2zPostRoutes = require("./routes/Custom/a2zposts.routes");
//Google_Merchant
const merchantPriceBenchmarkRoutes = require("./routes/Google_Merchant/merchantpricebenchmark.routes");
const merchantIssuesRoutes = require("./routes/Google_Merchant/merchantissues.routes");
const adsRecommendationsRoutes = require("./routes/Google_Merchant/adsrecommendations.routes");
const attributeMappingRulesRoutes = require("./routes/Google_Merchant/attributemappingrules.routes");
const shippingRatesRoutes = require(
  "./routes/Google_Merchant/shippingrates.routes"
);
const shippingTimesRoutes = require(
  "./routes/Google_Merchant/shippingtimes.routes"
);

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
//blogs
app.use("/api/blogs", blogRoutes);
//Core
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/terms", termRoutes);
app.use("/api/term-taxonomy", taxonomyRoutes);
app.use("/api/term-relationships", termRelationshipRoutes);
app.use("/api/links", linkRoutes);
app.use("/api/options", optionRoutes);
//Custom
app.use("/api/aws-index", awsIndexRoutes);
app.use("/api/a2z-posts", a2zPostRoutes);
//Google_Merchant
app.use(
   "/api/google-merchant/merchant-price-benchmarks",
   merchantPriceBenchmarkRoutes,
);
app.use("/api/google-merchant/merchant-issues", merchantIssuesRoutes);
app.use("/api/google-merchant/ads-recommendations", adsRecommendationsRoutes);
app.use(
   "/api/google-merchant/attribute-mapping-rules",
   attributeMappingRulesRoutes,
);
app.use("/api/google-merchant/shipping-rates",shippingRatesRoutes);
app.use(
  "/api/google-merchant/shipping-times",
  shippingTimesRoutes
);


app.get("/", (req, res) => {
  res.send("Server is Running");
});

module.exports = app;
