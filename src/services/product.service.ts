import { Product } from "../models"

interface AddProductProps {
  sku?: string
  name: string
  description?: string
  price: number
  quantity: number
  images: string[]
}

export const addProduct = async (props: AddProductProps) => {
  const product = new Product({
    sku: props.sku,
    name: props.name,
    description: props.description,
    price: props.price,
    quantity: props.quantity,
    images: props.images,
  })
  const result = await product.save()
  return result
}

export const getProduct = async (productId: string) => {
  const result = await Product.findById(productId)
  return result
}

export const getProducts = async () => {
  const result = await Product.find()
  return result
}

export const deleteProduct = async (productId: string) => {
  await Product.findByIdAndDelete(productId)
}
