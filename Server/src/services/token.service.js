const jwt = require("jsonwebtoken");
const { Token } = require("../models");
const config = require("../config/config");

/**
* Create token in jsonwebtoken
*/
const generate_token = async (reqbody) => {
  let payload = {
    ...reqbody,
    expire_time: reqbody.expire_time.unix(),
  };

  return jwt.sign(payload, config.jwt.secret_key);
};

/**
 * Save token in our database
 */
const save_token = async (reqbody) => {
  return Token.findOneAndUpdate(
    { user: reqbody.user },
    {
      $set: {
        ...reqbody,
      },
    },
    { new: true, upsert: true }
  );
};

module.exports = {
  generate_token,
  save_token,
};