const mongoose = require("mongoose");

const sub_child_category_Schema = new mongoose.Schema(
    {
        sub_child_category_name : {
            type: String,
            trim: true
        },
        sub_child_category_desc : {
            type: String,
            trim: true
        },
        sub_category : {
            type: mongoose.Types.ObjectId,
            ref: "Sub_category"
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

const sub_child_category = mongoose.model("Sub_child_category",sub_child_category_Schema);
module.exports = sub_child_category