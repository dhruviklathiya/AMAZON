const mongoose = require("mongoose");

const sub_category_Schema = new mongoose.Schema(
    {
        sub_category_name : {
            type: String,
            trim: true
        },
        sub_category_desc : {
            type: String,
            trim: true
        },
        category : {
            type: mongoose.Types.ObjectId,
            ref: "Category"
        },
        is_active : {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const sub_category = mongoose.model("Sub_category",sub_category_Schema);
module.exports = sub_category
