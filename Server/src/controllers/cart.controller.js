const { cart_Service,user_Service } = require("../services");

const create_cart = async(req,res) => {
    try {
        const reqbody = req.body;
        const user_exist = await user_Service.get_user_by_id(reqbody.user);
        if(!user_exist){
            throw new Error("User does not exist -!-");
        }
        const cart_exist = await cart_Service.get_cart_by_user(reqbody.user);
        if(cart_exist){
            throw new Error("Cart already exist for this user -!-");
        }
        const cart = await cart_Service.create_cart(reqbody);
        if(!cart){
            throw new Error("Something went wrong -!-");
        }
        res.status(200).json({
            success:true,
            message:"Cart created successfully ^-^ ",
            data:cart
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

const get_cart_list = async(req,res) => {
    try {
        const cart_list = await cart_Service.get_cart_list();
        if(!cart_list){
            throw new Error("Cart list data does not exist -!-");
        }
        res.status(200).json({
            success:true,
            message:"Cart list dispatch successfully ^-^ ",
            data:cart_list
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

const delete_cart = async(req,res) => {
    try {
        const cart_exist = await cart_Service.get_cart_by_id(req.params.cartId)
        if(!cart_exist){
            throw new Error("Cart does not exist -!-");
        }
        const cart_delete = await cart_Service.delete_cart(req.params.cartId);
        if(!cart_delete){
            throw new Error("Something went wrong -!- ")
        }
        res.status(200).json({
            success:true,
            message:"Cart deleted successfully ^-^ ",
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

const update_cart = async(req,res) => {
    try {
        const cart_exist = await cart_Service.get_cart_by_id(req.params.cartId);
        if(!cart_exist){
            throw new Error("Cart does not exist -!-");
        }
        const updated = await cart_Service.update_cart(req.params.cartId,req.body);
        if(!updated){
            throw new Error("Something went wrong");
        }
        res.status(200).json({
            success:true,
            message:"Cart updated successfully ^-^ ",
            data:req.body
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}


module.exports = {
    create_cart,
    get_cart_list,
    delete_cart,
    update_cart
}