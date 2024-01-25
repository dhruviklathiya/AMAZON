const express = require("express");
const { sub_child_category_Validation } = require("../../validations");
const { sub_child_category_Controller } = require("../../controllers");
const validate = require("../../middlewares/validate")

const router = express.Router()
router.get(
    "/list",
    sub_child_category_Controller.sub_child_category_list
)
router.post(
    "/create-sub-child-category",
    validate(sub_child_category_Validation.create_sub_child_category),
    sub_child_category_Controller.create_sub_child_category
)
router.delete(
    "/delete-sub-child-category/:sub_child_categoryId",
    sub_child_category_Controller.delete_sub_child_category
)
router.put(
    "/update-sub-child-category/:sub_child_categoryId",
    validate(sub_child_category_Validation.create_sub_child_category),
    sub_child_category_Controller.update_sub_child_category
)
module.exports = router;
