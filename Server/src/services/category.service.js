const { Category } = require("../models");

/**
 * Create category
 * @param {object} reqbody
 * @returns {Promise<Category>}
 */
const create_category = async (reqbody) => {
  return Category.create(reqbody);
};

/**
 * Get category list
 * @returns {Promise<Category>}
 */
const get_category_list = async () => {
    return Category.find();
};

/**
 * Get category by name
 * @param {object} category_name
 * @returns {Promise<Category>}
 */
const get_category_by_name = async(category_name)=>{
  return Category.findOne({category_name})
}

/**
 * Get Category by id
 * @param {object} category_id
 * @returns {Promise<Category>}
 */
const   get_category_by_id = async(category_id) => {
  return Category.findById(category_id);
}

/**
* Delete Category by id
* @param {object} category_id
* @returns {Promise<Category>}
*/
const delete_category = async(category_id) => {
  return Category.findByIdAndDelete(category_id);
}
/**
* Delete Category by id
* @param {object} category_id
* @returns {Promise<Category>}
*/
const update_category = async(category_id,reqbody) => {
  return Category.findByIdAndUpdate(category_id,{$set:reqbody});
}

module.exports = {
    create_category,
    get_category_list,
    get_category_by_name,
    get_category_by_id,
    delete_category,
    update_category
}