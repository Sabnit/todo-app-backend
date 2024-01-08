import Joi from "joi";

export const getCreateUserSchema = Joi.object({
  name: Joi.string().required().min(4).messages({
    "any.required": "Name is required",
    "string.empty": "Name cannot be empty",
    "string.min": "Name should have at least 4 characters",
  }),
  password: Joi.string().required().min(8).messages({
    "any.required": "Password is required",
    "string.empty": "Password cannot be empty",
    "string.min": "Password should have at least 8 characters",
  }),
  email: Joi.string().email().messages({
    "string.email": "Email must be a valid format",
    "string.empty": "Email cannot be empty",
  }),
});

export const getUserSchema = Joi.object({
  password: Joi.string().required().min(8).messages({
    "any.required": "Password is required",
    "string.empty": "Password cannot be empty",
    "string.min": "Password should have at least 8 characters",
  }),
  email: Joi.string().email().messages({
    "string.email": "Email must be a valid format",
    "string.empty": "Email cannot be empty",
  }),
});
