const fs = require("fs");
const { banner_Service } = require("../services");

/** Create Banner */
const create_banner = async (req, res) => {
  try {
    const reqbody = req.body;

    if (req.file) {
      reqbody.product_image = req.file.filename;
    } else {
      throw new Error("Banner image is required -!- ");
    }

    const banner = await banner_Service.create_banner(reqbody);

    res.status(200).json({
      success: true,
      message: "Banner create successfully ^-^ ",
      data: banner,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later -!- ",
    });
  }
};

/** Get Banner list */
const get_banner_list = async (req, res) => {
  try {
    const banner_list = await banner_Service.get_banner_list();

    res.status(200).json({
      success: true,
      message: "Banner list dispatch successfully ^-^ ",
      data: banner_list,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later -!- ",
    });
  }
};


module.exports = {
  create_banner,
  get_banner_list,
};
