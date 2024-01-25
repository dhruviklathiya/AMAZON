const { user_Service, email_Service } = require("../services");

/* CREATE USER */
const create_user = async (req, res) => {
  try {
    const reqBody = req.body;
    const userExists = await user_Service.get_user_by_email(reqBody.email);
    if (userExists) {
      throw new Error("User already created by this email -!- ");
    }
    const user = await user_Service.create_user(reqBody);
    if (!user) {
      throw new Error("Something went wrong -!- ");
    }
    res.status(200).json({
      success: true,
      message: "User create successfully ^-^",
      data: reqBody,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* USER LIST */
const get_user_list = async (req, res) => {
  try {
    const userlist = await user_Service.get_user_list();
    if(!userlist){
      throw new Error("User list data not found -!- ");
    }
    res.status(200).json({
      success: true,
      message: "Get user list dispatch successfully ^-^ ",
      data: userlist,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get user details by id */
const getUserDetails = async (req, res) => {
  try {
    const getDetails = await user_Service.get_user_by_id(req.params.userId);
    if (!getDetails) {
      throw new Error("User not found -!-");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** user details update by id */
const updateDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await user_Service.get_user_by_id(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await user_Service.update_details(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details update successfully!"
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* DELETE USER */
const delete_user = async (req, res) => {
  try {
    const user_id = req.params.userId;
    const userExists = await user_Service.get_user_by_id(user_id);
    if (!userExists) {
      throw new Error("User does not exist -!- ");
    }
    await user_Service.delete_user(user_id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
/* UPDATE USER */
const update_user = async (req, res) => {
  try {
    const reqbody = req.body
    const user_id = req.params.userId;
    const userExists = await user_Service.get_user_by_id(user_id);
    if (!userExists) {
      throw new Error("User does not exist -!- ");
    }
    await user_Service.update_user(user_id,reqbody);
    res.status(200).json({
      success: true,
      message: "User updated successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

/** Send mail to reqested email */
const send_mail = async (req, res) => {
    try {
      const reqBody = req.body;
      const sendEmail = await email_Service.send_mail(
        reqBody.email,
        reqBody.subject,
        reqBody.text
        );
      if (!sendEmail) {
        throw new Error("Something went wrong, please try again or later.");
      }
      res
        .status(200)
        .json({ success: true, message: "Email send successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
module.exports = {
  create_user,
  get_user_list,
  getUserDetails,
  updateDetails,
  delete_user,
  update_user,
  send_mail
};
