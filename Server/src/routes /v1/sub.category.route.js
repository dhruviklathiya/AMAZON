const express = require("express");
const { sub_category_Validation } = require("../../validations");
const { sub_category_Controller } = require("../../controllers");
const validate = require("../../middlewares/validate")

const router = express.Router()
router.get(
    "/list",
    sub_category_Controller.sub_category_list
)
router.post(
    "/create-sub-category",
    validate(sub_category_Validation.create_sub_category),
    sub_category_Controller.create_sub_category
)
router.delete(
    "/delete-sub-category/:sub_categoryId",
    sub_category_Controller.delete_sub_category
)
router.put(
    "/update-sub-category/:sub_categoryId",
    validate(sub_category_Validation.create_sub_category),
    sub_category_Controller.update_sub_category
)
module.exports = router;
