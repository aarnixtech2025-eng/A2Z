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


//Forms
const formEntryRoutes = require("./routes/Forms/formEntryRoutes");
const formReportRoutes = require("./routes/Forms/formReport.routes");
const formViewRoutes = require("./routes/Forms/formView.routes");
const wpFormsPaymentRoutes = require( "./routes/Forms/wpFormsPayment.routes");
const wpFormsPaymentMetaRoutes = require("./routes/Forms/wpFormsPaymentMeta.routes");
const wpFormsTaskMetaRoutes = require("./routes/Forms/wpFormsTaskMeta.routes");
const wpFormsLogRoutes = require( "./routes/Forms/wpFormsLog.routes");
//Socail_Marketing
const b2sUserContactRoutes = require("./routes/Social_Marketing/wpuz_b2s_user_contact_routes");

//new route with new pages 
const aboutRoutes = require("./routes/about.routes");


const app = express();
// console.log("argumnent problem")
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // ✅ Enable CORS

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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
app.use("/api/google-merchant/merchant-issues",merchantIssuesRoutes);
app.use("/api/google-merchant/merchant-price-benchmarks",merchantPriceBenchmarkRoutes);

//Forms
app.use("/api/form-entries",formEntryRoutes);
app.use("/api/form-reports",formReportRoutes);
app.use("/api/form-views", formViewRoutes);
app.use("/api/wpforms-payments",wpFormsPaymentRoutes);
app.use("/api/wpforms-payment-meta", wpFormsPaymentMetaRoutes);
app.use("/api/wpforms-task-meta",wpFormsTaskMetaRoutes);  
app.use("/api/wpforms-logs",wpFormsLogRoutes);
//Social_Marketing
app.use("/api/b2s-user-contact",b2sUserContactRoutes);

//new routes with new pages
app.use("/api/about", aboutRoutes);


app.get("/", (req, res) => {
   res.send("Server is Running");
});

module.exports = app;
