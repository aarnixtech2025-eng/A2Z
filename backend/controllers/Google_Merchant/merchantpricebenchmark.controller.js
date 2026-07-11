const merchantPriceBenchmarkService = require("../../services/Google_Merchant/merchantpricebenchmark.service");

class MerchantPriceBenchmarkController {
  async createBenchmark(req, res, next) {
    try {
      const benchmark = await merchantPriceBenchmarkService.createBenchmark(req.body);

      return res.status(201).json({
        success: true,
        message: "Benchmark created successfully.",
        data: benchmark,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllBenchmarks(req, res, next) {
    try {
      const benchmarks =
        await merchantPriceBenchmarkService.getAllBenchmarks();

      return res.status(200).json({
        success: true,
        count: benchmarks.length,
        data: benchmarks,
      });
    } catch (error) {
      next(error);
    }
  }

  async getBenchmarkById(req, res, next) {
    try {
      const benchmark =
        await merchantPriceBenchmarkService.getBenchmarkById(
          req.params.id
        );

      if (!benchmark) {
        return res.status(404).json({
          success: false,
          message: "Benchmark not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: benchmark,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateBenchmark(req, res, next) {
    try {
      const benchmark =
        await merchantPriceBenchmarkService.updateBenchmark(
          req.params.id,
          req.body
        );

      if (!benchmark) {
        return res.status(404).json({
          success: false,
          message: "Benchmark not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Benchmark updated successfully.",
        data: benchmark,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteBenchmark(req, res, next) {
    try {
      const deleted =
        await merchantPriceBenchmarkService.deleteBenchmark(
          req.params.id
        );

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Benchmark not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Benchmark deleted successfully.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new MerchantPriceBenchmarkController();