const express = require("express");
const validate = require("../../middlewares/validate");
const { order_Validation } = require("../../validations");
const { order_Controller } = require("../../controllers");
const router = express.Router();

router.post(
    "/create-order",
    validate(order_Validation.create_order),
    order_Controller.create_order
)

router.get(
    "/list",
    order_Controller.get_order_list
)

router.put(
    "/update-order/:orderId",
    validate(order_Validation.create_order),
    order_Controller.update_order
)

router.delete(
    "/delete-order/:orderId",
    order_Controller.delete_order
    )

module.exports = router