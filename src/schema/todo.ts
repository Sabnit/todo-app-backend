import Joi from "joi";

export const getCreateTodoSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Title is required",
    "string.empty": "Title cannot be empty",
  }),
});

export const getTodoSchema = Joi.object({
  id: Joi.number().messages({
    "number.base": "id should be number",
  }),
  completed: Joi.boolean().messages({
    "boolean.base": "Completed field should be boolean",
  }),
});

export const getTodoQuerySchema = Joi.object({
  search: Joi.string().messages({
    "string.base": "Search query should be string",
  }),
  completed: Joi.boolean().messages({
    "boolean.base": "Completed field should be boolean",
  }),
});
