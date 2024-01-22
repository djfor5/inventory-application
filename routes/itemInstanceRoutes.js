import express from "express"
import iteminstance_controller from "../controllers/itemInstanceController.js"

const router = express.Router()

router.get('/', iteminstance_controller.iteminstance_list)

router.get('/:id', iteminstance_controller.iteminstance_detail)

export default router