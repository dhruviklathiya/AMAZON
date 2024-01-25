const { Order } = require("../models");

const get_order_by_user = async(user) => {
    return Order.findOne({user});
}

const create_order = async(reqbody) => {
    return Order.create(reqbody);
}

const get_order_list = async() => {
    return Order.find().populate("cart").populate("user");
}

const get_order_by_id = async(order_id) => {
    return Order.findById(order_id);
}

const update_order = async(order_id,reqbody) => {
    return Order.findByIdAndUpdate(order_id,{$set:reqbody});
}

const delete_order = async(order_id) => {
    return Order.findByIdAndDelete(order_id);
}

module.exports = {
    get_order_by_user,
    create_order,
    get_order_list,
    get_order_by_id,
    update_order,
    delete_order
}