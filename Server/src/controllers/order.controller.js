const { order_Service,user_Service } = require("../services");

const create_order = async(req,res) => {
    try {
        const reqbody = req.body;
        const user_exist = await user_Service.get_user_by_id(reqbody.user);
        if(!user_exist){
            throw new Error("User does not exist -!-");
        }
        const order_exist = await order_Service.get_order_by_user(reqbody.user);
        if(order_exist){
            throw new Error("Order already exist for this user -!-");
        }
        const order = await order_Service.create_order(reqbody);
        if(!order){
            throw new Error("Something went wrong -!-");
        }
        res.status(200).json({
            success:true,
            message:"Order created successfully ^-^ ",
            data:order
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

const update_order = async(req,res) => {
    try {
        const order_exist = await order_Service.get_order_by_id(req.params.orderId);
        if(!order_exist){
            throw new Error("order does not exist -!-");
        }
        const updated = await order_Service.update_order(req.params.orderId,req.body);
        if(!updated){
            throw new Error("Something went wrong");
        }
        res.status(200).json({
            success:true,
            message:"Order updated successfully ^-^ ",
            data:req.body
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

const get_order_list = async(req,res) => {
    try {
        const order_list = await order_Service.get_order_list();
        if(!order_list){
            throw new Error("Order list does not exist -!-");
        }
        res.status(200).json({
            success:true,
            message:"Order list dispatch successfully ^-^ ",
            data:order_list
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

const delete_order = async(req,res) => {
    try {
        const order_exist = await order_Service.get_order_by_id(req.params.orderId)
        if(!order_exist){
            throw new Error("Order does not exist -!-");
        }
        const order = await order_Service.delete_order(req.params.orderId)
        if(!order){
            throw new Error("Something went wrong -!-");
        }
        res.status(200).json({
            success:true,
            message:"Order deleted successfully ^-^ ",
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}


module.exports = {
    create_order,
    get_order_list,
    update_order,
    delete_order
}