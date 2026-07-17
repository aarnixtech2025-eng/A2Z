const MerchantPriceBenchmark = require(
  "./wpuz_gla_merchant_price_benchmarks"
);

const MerchantIssues = require("./wpuz_gla_merchant_issues");

const AdsRecommendations = require(
  "./wpuz_gla_ads_recommendations"
);

const AttributeMappingRules = require(
  "./wpuz_gla_attribute_mapping_rules"
);
const ShippingRates = require("./wpuz_gla_shipping_rates");

const ShippingTimes = require("./wpuz_gla_shipping_times");

module.exports = {
  MerchantPriceBenchmark,
  MerchantIssues,
  AdsRecommendations,
  AttributeMappingRules,
  ShippingRates,
  ShippingTimes,
};

// MUST BE AT BOTTOM
require("./associations");