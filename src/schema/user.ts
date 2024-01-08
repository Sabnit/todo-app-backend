import Joi from "joi";

export const getCreateUserSchema = Joi.object({
  name: Joi.string().required().min(4).messages({
    "any.required": "name is required",
    "string.empty": "name cannot be empty",
    "string.base": "name should be string",
  }),
  password: Joi.string().required().min(8).messages({
    "any.required": "Password is required",
    "string.empty": "Password cannot be empty",
    "string.min": "Password should have at least 8 characters",
  }),
});
