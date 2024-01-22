import express from "express"
import category_controller from "../controllers/categoryController.js"

const router = express.Router()

router.get('/', category_controller.category_list)

router.get('/:id', category_controller.category_detail)

export default router