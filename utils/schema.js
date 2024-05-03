import * as yup from 'yup'

export const productSchema = yup.object().shape({
  title: yup.string().min(3).max(255).required(),
  description: "",
  // description: yup.string().required(),
  brand_id: yup.string().required(),
  model: yup.string().max(255).required(),
  price: yup.number().min(1).required(),
  sale_price: yup.number().min(0)
})