const { product_Service } = require("../services");

/* CREATE PRODUCT */
const create_product = async(req,res) => {
    try {
        const reqbody = req.body;
        const productexist = await product_Service.get_product_by_name(reqbody.product_name);
        if(productexist){
            throw new Error("Product by this name already exist -!- ");
        }
        const product = await product_Service.create_product(reqbody);
        if(!product){
            throw new Error("Something went wrong -!- ");
        }
        res.status(200).json({
            success:true,
            message:"Product created successfully ^-^ ",
            data: reqbody
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

/* PRODUCT LIST */
const get_product_list = async (req, res) => {
    try {
      const product_list = await product_Service.get_product_list();
      if(!product_list){
        throw new Error("Product list data not found -!- ");
      }
      res.status(200).json({
        success: true,
        message: "Get Product list dispatch successfully ^-^ ",
        data: product_list,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
};

/* DELETE PRODUCT */
const delete_product = async(req,res) => {
    try {
      const product_id = req.params.productId;
      const product_exist = await product_Service.get_product_by_id(product_id);
      if(!product_exist){
        throw new Error("Product not found -!- ");
      }
      await product_Service.delete_product(product_id);
      res.status(200).json({
        success: true,
        message: "Product deleted successfully ^-^ ",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
}

/* UPDATE PRODUCT */
const update_product = async(req,res) => {
    try {
      const reqbody = req.body;
      const product_id = req.params.productId;
      const product_exist = await product_Service.get_product_by_id(product_id);
      if(!product_exist){
        throw new Error("Product not found -!- ");
      }
      await product_Service.update_product(product_id,reqbody);
      res.status(200).json({
        success: true,
        message: "Product updated successfully ^-^ ",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
}

module.exports = {
    create_product,
    get_product_list,
    delete_product,
    update_product
}