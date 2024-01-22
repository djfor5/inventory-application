import express from "express"
import index_controller from "../controllers/indexController.js"

const router = express.Router()

router.get('/', index_controller.all_list)

export default router