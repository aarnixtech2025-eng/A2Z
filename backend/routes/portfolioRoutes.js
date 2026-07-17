const express =
require("express");

const router =
express.Router();

const upload =
require(
"../middleware/uploadMiddleware"
);

const {
  protect
} = require(
"../middleware/authMiddleware"
);







const {
  createPortfolio,
  getPortfolios,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");

router.post(
"/",
protect,
upload.single(
"featuredImage"
),
createPortfolio
);
router.get(
  "/",
 
 getPortfolios
);

router.put(
  "/:id",
  protect,
  upload.single("featuredImage"),
  updatePortfolio
);

router.delete(
  "/:id",
  protect,
  deletePortfolio
);

module.exports =
router;