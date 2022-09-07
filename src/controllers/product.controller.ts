import { NextFunction, Request, Response } from "express"
import { addProduct, deleteProduct, getProduct, getProducts } from "../services/product.service,"
import { HttpStatusCodes } from "../types/Http"
import { addProductValidationSchema } from "../validations/product.validation"

export const handleAddProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const vResult = await addProductValidationSchema.validateAsync(req.body)
    const result = await addProduct(vResult)
    res.status(HttpStatusCodes.OK).json(result)
  } catch (err) {
    next(err)
  }
}

export const handleGetProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productId = req.params.id
    const result = await getProduct(productId)
    res.status(HttpStatusCodes.OK).json(result)
  } catch (err) {
    next(err)
  }
}

export const handleGetProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getProducts()
    res.status(HttpStatusCodes.OK).json(result)
  } catch (err) {
    next(err)
  }
}

export const handleDeleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productId = req.params.id
    await deleteProduct(productId)
    res.status(HttpStatusCodes.OK).send()
  } catch (err) {
    next(err)
  }
}
