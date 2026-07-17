const {
  MerchantPriceBenchmark,
  MerchantIssues,
} = require("./index");

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

