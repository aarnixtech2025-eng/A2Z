const {
  MerchantPriceBenchmark,
  MerchantIssues,
} = require("./index");

// Merchant Price Benchmark -> Merchant Issues

MerchantPriceBenchmark.hasMany(MerchantIssues, {
  foreignKey: "product_id",
  sourceKey: "product_id",
  as: "issues",
});

MerchantIssues.belongsTo(MerchantPriceBenchmark, {
  foreignKey: "product_id",
  targetKey: "product_id",
  as: "benchmark",
});