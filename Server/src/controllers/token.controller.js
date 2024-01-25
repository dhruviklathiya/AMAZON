const { token_Service } = require("../services");
const moment = require("moment");

/** Create token in jsonwebtoken and save in our database. */
const generate_token = async (req, res) => {
  try {
    const reqBody = req.body;

    reqBody.expire_time = moment().add(10, "minutes");

    /** Create token in jsonwebtoken */
    const token = await token_Service.generate_token(reqBody);
    reqBody.token = token;

    /** Save token in our database */
    const save_token = await token_Service.save_token(reqBody);

    res
      .status(200)
      .json({ success: true, message: "Token created -!- ", data: save_token });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Something went wrong -!- ",
    });
  }
};

/** Verify token */
const verify_token = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Token successfully verified ^-^ ",
    data: req.user,
  });
};

module.exports = {
  generate_token,
  verify_token,
};