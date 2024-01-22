import asyncHandler from "express-async-handler"
import { body, validationResult } from "express-validator"
import Item from "../models/item.js";
import ItemInstance from "../models/iteminstance.js";
import Category from "../models/category.js";

const all_list = asyncHandler(async (req, res, next) => {

  const itemsCount = await Item.countDocuments()
  const itemInstancesCount = await ItemInstance.countDocuments()
  const categoriesCount = await Category.countDocuments()

  res.render('index', { title: 'All', itemsCount, itemInstancesCount, categoriesCount })
})

const index_controller = {
  all_list,
}
export default index_controller