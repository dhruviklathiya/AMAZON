const express = require("express");
const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const { banner_Validation } = require("../../validations");
const { banner_Controller } = require("../../controllers");

const router = express.Router();

/** Create product */
router.post(
  "/create",
  // auth(),
  upload.single("product_image"),
  validate(banner_Validation.createBanner),
  banner_Controller.create_banner
);

/** Get production list */
router.get(
  "/list",
  validate(banner_Validation.getList),
  banner_Controller.get_banner_list
);

module.exports = router;
