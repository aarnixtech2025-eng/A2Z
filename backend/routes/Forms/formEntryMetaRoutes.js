const express = require("express");

const router = express.Router();

const FormEntryMetaController = require(
  "../../controllers/Forms/FormEntryMetaController"
);

/* =========================================================
   CREATE FORM ENTRY META
========================================================= */

router.post(
  "/",
  FormEntryMetaController.createFormEntryMeta
);

/* =========================================================
   GET ALL FORM ENTRY META
========================================================= */

router.get(
  "/",
  FormEntryMetaController.getAllFormEntryMeta
);

/* =========================================================
   GET META BY ENTRY ID AND META KEY
========================================================= */

router.get(
  "/entry/:entryId/key/:metaKey",
  FormEntryMetaController.getMetaByEntryIdAndKey
);

/* =========================================================
   GET META BY ENTRY ID
========================================================= */

router.get(
  "/entry/:entryId",
  FormEntryMetaController.getMetaByEntryId
);

/* =========================================================
   DELETE ALL META BY ENTRY ID
========================================================= */

router.delete(
  "/entry/:entryId",
  FormEntryMetaController.deleteMetaByEntryId
);

/* =========================================================
   GET FORM ENTRY META BY ID
========================================================= */

router.get(
  "/:metaId",
  FormEntryMetaController.getFormEntryMetaById
);

/* =========================================================
   UPDATE FORM ENTRY META
========================================================= */

router.put(
  "/:metaId",
  FormEntryMetaController.updateFormEntryMeta
);

/* =========================================================
   DELETE FORM ENTRY META
========================================================= */

router.delete(
  "/:metaId",
  FormEntryMetaController.deleteFormEntryMeta
);

module.exports = router;