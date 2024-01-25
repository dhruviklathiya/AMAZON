const Joi = require("joi");

const create_sub_child_category = {
    body: Joi.object().keys({
        sub_child_category_name: Joi.string().required().trim(),
        sub_child_category_desc: Joi.string().required().trim(),
        sub_category: Joi.string().required().trim(),
    })
}

module.exports = {
    create_sub_child_category,
}