import express from "express"
import {
  handleAddProduct,
  handleDeleteProduct,
  handleGetProduct,
  handleGetProducts,
} from "../controllers/product.controller"

const router = express.Router()

router.post("/", handleAddProduct)
router.get("/:id", handleGetProduct)
router.get("/", handleGetProducts)
router.delete("/:id", handleDeleteProduct)

module.exports = router
