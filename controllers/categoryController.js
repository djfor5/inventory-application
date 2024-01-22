import asyncHandler from "express-async-handler"
import { body, validationResult } from "express-validator"
import Category from "../models/category.js";

const category_list = asyncHandler(async (req, res, next) => {

  const categories = await Category.find()

  res.render('categories', { title: 'Categories', categories })
})

const category_detail = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id)

  res.render('category_detail', { title: 'Category Details', category })
})

const category_controller = {
  category_list,
  category_detail,
}
export default category_controller