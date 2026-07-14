const FormEntry = require("./wpuz_frmt_form_entry");
const FormEntryMeta = require("./wpuz_frmt_form_entry_meta");

const FormReport = require("./wpuz_frmt_form_reports");
const FormView = require("./wpuz_frmt_form_views");

const WPFormsPayment = require("./wpuz_wpforms_payments");
const WPFormsPaymentMeta = require("./wpuz_wpforms_payment_meta");

module.exports = {
  FormEntry,
  FormEntryMeta,
  FormReport,
  FormView,
  WPFormsPayment,
  WPFormsPaymentMeta,
};

require("./associations");