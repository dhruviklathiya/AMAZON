const Joi = require("joi");

const create_cart = {
    body: Joi.object().keys({
        total_items:Joi.number().required(),
        total_price:Joi.number().required(),
        coupon_code:Joi.string().required().trim(),
        user:Joi.string().required().trim(),
        product1:Joi.string().required().trim(),
        product2:Joi.string().optional().trim(),
        product3:Joi.string().optional().trim(),
        product4:Joi.string().optional().trim(),
        product5:Joi.string().optional().trim(),
    })
}

module.exports = {
    create_cart
}