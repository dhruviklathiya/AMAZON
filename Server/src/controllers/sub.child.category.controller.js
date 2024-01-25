const { sub_child_category_Service } = require("../services");

/* CREATE SUB_CHILD_CATEGORY */
const create_sub_child_category = async (req, res) => {
    try {
      const reqBody = req.body;
      const sub_child_category_exist = await sub_child_category_Service.get_sub_child_category_by_name(reqBody.sub_child_category_name);
      if(sub_child_category_exist){
        throw new Error("Sub-child-category by this name already exist -!- ");
      }
      const sub_child_category = await sub_child_category_Service.create_sub_child_category(reqBody);
      if(!sub_child_category){
        throw new Error("Something went wrong -!- ");
      }
      res.status(200).json({
        success: true,
        message: "Sub-child-category create successfully ^-^ ",
        data: reqBody,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
};

/* SUB_CHILD_CATEGORY LIST */
const sub_child_category_list = async (req,res) => {
    try {
        const sub_child_category_list = await sub_child_category_Service.get_sub_child_category_list();
        if(!sub_child_category_list){
          throw new Error("Sub-child-category list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Sub-child-category list dispatch successfully ^-^ ",
          data:sub_child_category_list
        });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
}

/* DELETE SUB_CHILD_CATEGORY */
const delete_sub_child_category = async(req,res) => {
  try {
    const sub_child_category_id = req.params.sub_child_categoryId;
    const sub_child_category_exist = await sub_child_category_Service.get_sub_child_category_by_id(sub_child_category_id);
    if(!sub_child_category_exist){
      throw new Error("Sub-child-category not found -!- ");
    }
    await sub_child_category_Service.delete_sub_child_category(sub_child_category_id);
    res.status(200).json({
      success: true,
      message: "Sub-child-category deleted successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
/* UPDATE SUB_CHILD_CATEGORY */
const update_sub_child_category = async(req,res) => {
  try {
    const reqbody = req.body;
    const sub_child_category_id = req.params.sub_child_categoryId;
    const sub_child_category_exist = await sub_child_category_Service.get_sub_child_category_by_id(sub_child_category_id);
    if(!sub_child_category_exist){
      throw new Error("Sub-child-category not found -!- ");
    }
    await sub_child_category_Service.update_sub_child_category(sub_child_category_id,reqbody);
    res.status(200).json({
      success: true,
      message: "Sub-child-category updated successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
module.exports = {
    create_sub_child_category,
    sub_child_category_list,
    delete_sub_child_category,
    update_sub_child_category
}