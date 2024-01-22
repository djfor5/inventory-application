import express from "express"
import item_controller from "../controllers/itemController.js"

const router = express.Router()

router.get('/', item_controller.item_list)

router.get('/:id', item_controller.item_detail)

export default router