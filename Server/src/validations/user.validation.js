const Joi = require("joi");

/** create user */
const create_user = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
  }),
};

/** Send mail */
const send_mail = {
    body: Joi.object({
      email: Joi.string().required().trim().email(),
      subject: Joi.string().required().trim(),
      text: Joi.string().required().trim(),
    }),
}

module.exports = {
  create_user,
  send_mail
};
