const {
  FormEntry,
  FormEntryMeta,
   WPFormsPayment,
  WPFormsPaymentMeta,
} = require("./index");

/* ==========================================================
   FORM ENTRY ↔ FORM ENTRY META
========================================================== */

FormEntry.hasMany(FormEntryMeta, {
  foreignKey: "entry_id",
  sourceKey: "entry_id",
  as: "meta",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

FormEntryMeta.belongsTo(FormEntry, {
  foreignKey: "entry_id",
  targetKey: "entry_id",
  as: "entry",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});


/* ==========================================================
   WP FORMS PAYMENT ↔ PAYMENT META
========================================================== */

WPFormsPayment.hasMany(WPFormsPaymentMeta, {
  foreignKey: "payment_id",
  sourceKey: "id",
  as: "meta",
  constraints: false,
});

WPFormsPaymentMeta.belongsTo(WPFormsPayment, {
  foreignKey: "payment_id",
  targetKey: "id",
  as: "payment",
  constraints: false,
});