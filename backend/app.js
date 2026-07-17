const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
const seoRoutes = require("./routes/seoRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const contactSettingRoutes = require("./routes/contactSettingRoutes");
const footerSettingRoutes = require("./routes/footerSettingRoutes");
const logoSettingRoutes = require("./routes/logoSettingRoutes");
const socialSettingRoutes = require("./routes/socialSettingRoutes");
const whyChooseUsRoutes = require("./routes/whyChooseUsRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const coursesRoutes = require("./routes/coursesRoutes");
const photoRoutes = require("./routes/photoRoutes");
const hdRoutes = require("./routes/hdRoutes");
const portfolioGalleryRoutes = require("./routes/portfolioGalleryRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes =
require("./routes/categoryRoutes");
const brandRoutes=require("./routes/brandRoutes");
const taxonomyRoutes = require("./routes/taxonomyRoutes");

const errorHandler = require(
  "./middleware/errorMiddleware"
);

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message:
      "Admin Panel Backend Running"
  });
});

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/blogs",
  blogRoutes
);

app.use(
  "/api/inquiries",
  inquiryRoutes
);

app.use(
  "/api/seo",
  seoRoutes
);

app.use(
  "/api/services",
  serviceRoutes
);

app.use(
"/api/testimonials",
testimonialRoutes
);

app.use(
  "/api/portfolios",
  portfolioRoutes
);

app.use(
"/api/banners",
bannerRoutes
);

app.use(
"/api/about",
aboutRoutes
);

app.use(
  "/api/why-choose-us",
  whyChooseUsRoutes
);

app.use(
  "/api/contact-settings",
  contactSettingRoutes
);

app.use(
  "/api/footer-settings",
  footerSettingRoutes
);

app.use(
  "/api/logo-settings",
  logoSettingRoutes
);

app.use(
  "/api/social-settings",
  socialSettingRoutes
);

app.use(
  "/api/upload",
  uploadRoutes
);

app.use(
  "/api/courses",
  coursesRoutes
);

app.use(
  "/api/photos",
  photoRoutes
);

app.use(
  "/api/hds",
  hdRoutes
);

app.use(
  "/api/portfolio-gallery",
  portfolioGalleryRoutes
);
app.use(
  "/api/products",
  productRoutes
);
app.use(
  "/api/categories",
  categoryRoutes
);
app.use(
"/api/brands",
brandRoutes
);
app.use(
  "/api/taxonomies",
  taxonomyRoutes
);
app.use(errorHandler);

module.exports = app;