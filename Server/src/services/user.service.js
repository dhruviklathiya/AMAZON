const { User } = require("../models");

/**
 * Create user
 */
const create_user = async (reqBody) => {
  return User.create(reqBody);
};

/**
 * Get user list
 */
const get_user_list = async () => {
  return User.find();
};

/**
 * Get user by email
 */
const get_user_by_email = async (email) => {
  return User.findOne({ email });
};

/**
 * Get user details by id
 */
const get_user_by_id = async (user_id) => {
  return User.findById(user_id);
};

/**
 * user details update by id
 */
const update_details = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

/**
 * Delete user
 */
const delete_user = async (userId) => {
  return User.findByIdAndDelete(userId);
};

/**
 * Update user
 */
const update_user = async (userId,reqbody) => {
  return User.findByIdAndUpdate(userId,{$set:reqbody});
};

module.exports = {
  create_user,
  get_user_list,
  get_user_by_id,
  update_details,
  get_user_by_email,
  delete_user,
  update_user
};
