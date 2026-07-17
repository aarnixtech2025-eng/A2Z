const express = require("express");
const router = express.Router();

const merchantPriceBenchmarkController = require("../../controllers/Google_Merchant/merchantpricebenchmark.controller");

router.post("/", merchantPriceBenchmarkController.createBenchmark);

router.get("/", merchantPriceBenchmarkController.getAllBenchmarks);

router.get("/:id", merchantPriceBenchmarkController.getBenchmarkById);

router.put("/:id", merchantPriceBenchmarkController.updateBenchmark);

router.delete("/:id", merchantPriceBenchmarkController.deleteBenchmark);

module.exports = router;