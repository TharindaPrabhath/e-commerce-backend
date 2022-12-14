import Joi from "@hapi/joi"

export const addProductValidationSchema = Joi.object({
  sku: Joi.string().allow("").optional(),
  name: Joi.string().required(),
  description: Joi.string().allow("").optional(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
  images: Joi.array().required(),
})

export const editProductValidationSchema = Joi.object({
  _id: Joi.string().required(),
  sku: Joi.string().allow("").optional(),
  name: Joi.string().required(),
  description: Joi.string().allow("").optional(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
  images: Joi.array().required(),
})
