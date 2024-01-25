const { sub_category_Service } = require("../services");

/* CREATE SUB_CATEGORY */
const create_sub_category = async (req, res) => {
    try {
      const reqBody = req.body;
      const sub_category_exist = await sub_category_Service.get_sub_category_by_name(reqBody.sub_category_name);
      if(sub_category_exist){
        throw new Error("Sub-category by this name already exist -!- ");
      }
      const sub_category = await sub_category_Service.create_sub_category(reqBody);
      if(!sub_category){
        throw new Error("Something went wrong -!- ");
      }
      res.status(200).json({
        success: true,
        message: "Sub-category create successfully ^-^ ",
        data: sub_category,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
};

/* SUB_CATEGORY LIST */
const sub_category_list = async (req,res) => {
    try {
        const sub_categorylist = await sub_category_Service.get_sub_category_list();
        if(!sub_categorylist){
          throw new Error("Sub-Category list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Sub-category list dispatch successfully ^-^ ",
          data: sub_categorylist
        });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
}

/* DELETE SUB_CATEGORY */
const delete_sub_category = async(req,res) => {
  try {
    const sub_category_id = req.params.sub_categoryId;
    const sub_category_exist = await sub_category_Service.get_sub_category_by_id(sub_category_id);
    if(!sub_category_exist){
      throw new Error("Sub-category not found -!- ");
    }
    await sub_category_Service.delete_sub_category(sub_category_id);
    res.status(200).json({
      success: true,
      message: "Sub-category deleted successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
/* UPDATE SUB_CATEGORY */
const update_sub_category = async(req,res) => {
  try {
    const reqbody = req.body;
    const sub_category_id = req.params.sub_categoryId;
    const sub_category_exist = await sub_category_Service.get_sub_category_by_id(sub_category_id);
    if(!sub_category_exist){
      throw new Error("Sub-category not found -!- ");
    }
    await sub_category_Service.update_sub_category(sub_category_id,reqbody);
    res.status(200).json({
      success: true,
      message: "Sub-category updated successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
module.exports = {
    create_sub_category,
    sub_category_list,
    delete_sub_category,
    update_sub_category
}