import Joi from "joi";

export const validatorTodoForm = Joi.object({
    todo: Joi.string().min(3).max(20).required().messages({
        'string.empty': "Поле є обов'язкове!",
        'string.min': "Мінімально 3 символа",
        'string.max': 'Максимально 20 символів',
    })
});