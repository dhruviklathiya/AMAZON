const express = require("express");
const validate = require("../../middlewares/validate");
const { cart_Validation } = require("../../validations");
const { cart_Controller } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-cart",
    validate(cart_Validation.create_cart),
    cart_Controller.create_cart
)

router.get(
    "/list",
    cart_Controller.get_cart_list
)

router.put(
    "/update-cart/:cartId",
    validate(cart_Validation.create_cart),
    cart_Controller.update_cart
)

router.delete(
    "/delete-cart/:cartId",
    cart_Controller.delete_cart
)

module.exports = router