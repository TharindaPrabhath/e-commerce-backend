import Joi from "@hapi/joi"

export const addProductValidationSchema = Joi.object({
  sku: Joi.string().allow("").optional(),
  name: Joi.string().required(),
  description: Joi.string().allow("").optional(),
  quantity: Joi.number().required(),
  images: Joi.array().required(),
})
