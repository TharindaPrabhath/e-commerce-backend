import express from "express"
import {
  handleAddProduct,
  handleDeleteProduct,
  handleEditProduct,
  handleGetProduct,
  handleGetProducts,
  handleSearchProducts,
} from "../controllers/product.controller"

const router = express.Router()

router.post("/", handleAddProduct)
router.get("/search", handleSearchProducts)
router.get("/:id", handleGetProduct)
router.get("/", handleGetProducts)
router.patch("/", handleEditProduct)
router.delete("/:id", handleDeleteProduct)

module.exports = router
