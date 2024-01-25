const Joi = require("joi");

/** Create token  */
const generate_token = {
  body: Joi.object({
    user: Joi.string().required().trim(),
  }),
};

module.exports = {
    generate_token,
};
