const { Sub_category } = require("../models");

const create_sub_category = async (reqbody) => {
  return Sub_category.create(reqbody);
};

const get_sub_category_list = async () => {
    return Sub_category.find().populate("category");
};

const get_sub_category_by_name = async(sub_category_name)=>{
  return Sub_category.findOne({sub_category_name})
}

const get_sub_category_by_id = async(sub_category_id) => {
  return Sub_category.findById(sub_category_id);
}

const delete_sub_category = async(sub_category_id) => {
  return Sub_category.findByIdAndDelete(sub_category_id);
}

const update_sub_category = async(sub_category_id,reqbody) => {
  return Sub_category.findByIdAndUpdate(sub_category_id,{$set:reqbody});
}

module.exports = {
    create_sub_category,
    get_sub_category_list,
    get_sub_category_by_name,
    get_sub_category_by_id,
    delete_sub_category,
    update_sub_category
}