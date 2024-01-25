const mongoose = require("mongoose");

const user_Schema = new mongoose.Schema(
    {
      first_name: {
        type: String,
        trim: true,
      },
      last_name: {
        type: String,
        trim: true,
      },
      email: {
        type: String,
        trim: true,
      },
      password: {
        type: String,
        trim: true,
      },
      address:{
        type: String,
        trim: true,
      },
      is_active: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

const user = mongoose.model("User",user_Schema);
module.exports = user;