const sequelize = require("../config/database");

const Admin = require("./Admin");
const Blog = require("./Blog");
const Inquiry = require("./Inquiry");
const SeoSetting = require("./SeoSetting");
const Service = require("./Service");
const Testimonial = require("./Testimonial");
const Portfolio = require("./Portfolio");
const Banner = require("./Banner");
const About = require("./About");
const ContactSetting = require("./ContactSetting");
const FooterSetting = require("./FooterSetting");
const LogoSetting = require("./LogoSetting");
const SocialSetting = require("./SocialSetting");
const WhyChooseUs = require("./WhyChooseUs");
const Course = require("./Course");
const Photo = require("./Photo");
const HD = require("./HD");
const PortfolioGallery = require("./PortfolioGallery");

module.exports = {
  sequelize,
  Admin,
  Blog,
  Inquiry,
  SeoSetting,
  Service,
  Testimonial,
  Portfolio,
  Banner,
  About,
  ContactSetting,
  FooterSetting,
  LogoSetting,
  SocialSetting,
  WhyChooseUs,
  Course,
  Photo,
  HD,
  PortfolioGallery
};