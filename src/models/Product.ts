import mongoose from "mongoose"

const Schema = mongoose.Schema

const ProductSchema = new Schema(
  {
    sku: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema)

export default Product
