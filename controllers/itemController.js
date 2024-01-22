import asyncHandler from "express-async-handler"
import { body, validationResult } from "express-validator"
import Item from "../models/item.js";

const item_list = asyncHandler(async (req, res, next) => {
  const items = await Item.find()

  res.render('items', { title: 'Items', items })
})

const item_detail = asyncHandler(async (req, res, next) => {
  const item = await Item.findById(req.params.id)

  res.render('item_detail', { title: 'Item Details', item })
})

const item_controller = {
  item_list,
  item_detail,
}
export default item_controller