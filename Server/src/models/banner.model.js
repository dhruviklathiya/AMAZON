const mongoose = require("mongoose");

const banner_Schema = mongoose.Schema(
  {
    banner_name: {
      type: String,
      trim: true,
    },
    banner_description: {
      type: String,
      trim: true,
    },
    banner_image: {
      type: String,
      trim: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const banner = mongoose.model("Banner", banner_Schema);

module.exports = banner;