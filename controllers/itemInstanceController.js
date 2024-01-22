import asyncHandler from "express-async-handler"
import { body, validationResult } from "express-validator"
import ItemInstance from "../models/iteminstance.js";

const iteminstance_list = asyncHandler(async (req, res, next) => {
  const iteminstances = await ItemInstance.find()

  res.render('iteminstances', { title: 'Item Instances', iteminstances })
})

const iteminstance_detail = asyncHandler(async (req, res, next) => {
  const iteminstance = await ItemInstance.findById(req.params.id)

  res.render('iteminstance_detail', { title: 'Item Instance Details', iteminstance })
})

const iteminstance_controller = {
  iteminstance_list,
  iteminstance_detail,
}
export default iteminstance_controller