const Joi = require("joi");

const create_product = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_desc: Joi.string().required().trim(),
        product_price: Joi.number().required(),
        sub_child_category: Joi.string().required()
    })
}

module.exports = {
    create_product
}