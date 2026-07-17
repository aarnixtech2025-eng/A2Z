const express=require("express");

const router=express.Router();

const BrandController=
require("../controllers/BrandController");

router.get(
"/tree",
BrandController.getBrandTree
);

router.get(
"/",
BrandController.getAllBrands
);

router.get(
"/:slug",
BrandController.getBrandBySlug
);

module.exports=router;