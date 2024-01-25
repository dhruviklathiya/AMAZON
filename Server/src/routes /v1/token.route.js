const express = require("express");
const validate = require("../../middlewares/validate");
const { token_Validation } = require("../../validations");
const { token_Controller } = require("../../controllers");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** GENERATE TOKEN WITH USERID */
router.post(
  "/create-token",
  validate(token_Validation.generate_token),
  token_Controller.generate_token
);

/** Verify token to get user details */
router.get("/verify-token", auth(), token_Controller.verify_token);

module.exports = router;