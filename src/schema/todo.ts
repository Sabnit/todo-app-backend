import Joi from "joi";

export const getCreateTaskSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Title is required",
    "string.empty": "Title cannot be empty",
  }),
});

export const getTaskQuerySchema = Joi.object({
  search: Joi.string().messages({
    "string.base": "Search query should be string",
  }),
  completed: Joi.boolean().messages({
    "boolean.base": "Completed field should be boolean",
  }),
});
