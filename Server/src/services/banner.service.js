const { Banner } = require("../models");

/**
 * Get Banner list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Product>}
 */
const get_banner_list = async () => {
  return Banner.find().populate("product")
};

/**
 * Create banner
 */
const create_banner = async (reqBody) => {
  return Banner.create(reqBody);
};


module.exports = {
    get_banner_list,
    create_banner
};
