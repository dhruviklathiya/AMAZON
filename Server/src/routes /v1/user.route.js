const express = require("express");
const { user_Validation } = require("../../validations");
const { user_Controller } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();
/** create user */
router.post(
    "/create-user",
    validate(user_Validation.create_user),
    user_Controller.create_user
);
/** Get user list */
router.get(
    "/list",
    user_Controller.get_user_list
);
router.delete(
    "/delete-user/:userId",
    user_Controller.delete_user
);
router.put(
    "/update-user/:userId",
    validate(user_Validation.create_user),
    user_Controller.update_user
)
router.post(
    "/send-mail",
    validate(user_Validation.send_mail),
    user_Controller.send_mail
  );
module.exports = router;
