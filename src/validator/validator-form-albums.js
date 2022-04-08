import Joi from "joi";

export const validatorFormAlbums = Joi.object({
    id: Joi.number().min(1).max(100).required().messages({
        'number.min': 'Мінімально від 1',
        'number.max': 'Максимально до 100',
    })
})