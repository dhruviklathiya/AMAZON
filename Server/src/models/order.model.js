const mongoose = require("mongoose");

const order_Schema = new mongoose.Schema(
    {
        order_status :{
            type:String,
            trim:true
        },
        payment_method:{
            type:String,
            trim:true
        },
        cart:{
            type:mongoose.Types.ObjectId,
            ref:"Cart"
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"User"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const order = mongoose.model("Order",order_Schema)
module.exports = order;