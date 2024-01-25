const { category_Service } = require("../services");

/* CREATE CATEGORY */
const create_category = async (req, res) => {
    try {
      const reqBody = req.body;
      const category_exist = await category_Service.get_category_by_name(reqBody.category_name);
      if(category_exist){
        throw new Error("Category by this name already exist -!- ");
      }
      const category = await category_Service.create_category(reqBody);
      if(!category){
        throw new Error("Something went wrong -!- ");
      }
      res.status(200).json({
        success: true,
        message: "Category create successfully ^-^ ",
        data: reqBody,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
};

/* CATEGORY LIST */
const category_list = async (req,res) => {
    try {
        const categorylist = await category_Service.get_category_list();
        if(!categorylist){
          throw new Error("Category list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Category list dispatch successfully ^-^ ",
          data:categorylist
        });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
}

/* DELETE CATEGORY */
const delete_category = async(req,res) => {
  try {
    const category_id = req.params.categoryId;
    const category_exist = await category_Service.get_category_by_id(category_id);
    if(!category_exist){
      throw new Error("Category not found -!- ");
    }
    await category_Service.delete_category(category_id);
    res.status(200).json({
      success: true,
      message: "Category deleted successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
/* UPDATE CATEGORY */
const update_category = async(req,res) => {
  try {
    const reqbody = req.body;
    const category_id = req.params.categoryId;
    const category_exist = await category_Service.get_category_by_id(category_id);
    if(!category_exist){
      throw new Error("Category not found -!- ");
    }
    await category_Service.update_category(category_id,reqbody);
    res.status(200).json({
      success: true,
      message: "Category updated successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
module.exports = {
    create_category,
    category_list,
    delete_category,
    update_category
}