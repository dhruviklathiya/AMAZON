const mongoose = require("mongoose");

const product_Schema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true
        },
        product_desc: {
            type: String,
            trim: true
        },
        product_price: {
            type: Number,
            default: 0
        },
        sub_child_category: {
            type: mongoose.Types.ObjectId,
            ref: "Sub_child_category",
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    });

const product = mongoose.model("Product", product_Schema);
module.exports = product;