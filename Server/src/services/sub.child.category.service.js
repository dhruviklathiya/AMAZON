const { Sub_child_category } = require("../models");

const create_sub_child_category = async (reqbody) => {
  return Sub_child_category.create(reqbody);
};

const get_sub_child_category_list = async () => {
    return Sub_child_category.find().populate("sub_category");
};

const get_sub_child_category_by_name = async(sub_child_category_name)=>{
  return Sub_child_category.findOne({sub_child_category_name})
}

const get_sub_child_category_by_id = async(sub_child_category_id) => {
  return Sub_child_category.findById(sub_child_category_id);
}

const delete_sub_child_category = async(sub_child_category_id) => {
  return Sub_child_category.findByIdAndDelete(sub_child_category_id);
}

const update_sub_child_category = async(sub_child_category_id,reqbody) => {
  return Sub_child_category.findByIdAndUpdate(sub_child_category_id,{$set:reqbody});
}

module.exports = {
    create_sub_child_category,
    get_sub_child_category_list,
    get_sub_child_category_by_name,
    get_sub_child_category_by_id,
    delete_sub_child_category,
    update_sub_child_category
}