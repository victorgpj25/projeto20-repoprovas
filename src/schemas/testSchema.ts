import joi from 'joi'

const postTestSchema = joi.object({
    name: joi.string().required()
        .messages({
            'any.required': 'Test name is a required field',
            'string.base': 'Given test name is not in a valid format'
        }
    ),
    pdfUrl: joi.string().uri().required()
        .messages({
            'any.required': 'Pdf url is a required field',
            'string.base': 'Given pdf url is not in a valid format',
            'string.uri': 'Given pdf url is not a valid url'
        }
    ),
    category: joi.string().required()
    .messages({
        'any.required': 'Category is a required field',
        'string.base': 'Given category name is not in a valid format'
    }
    ),
    discipline: joi.string().required()
    .messages({
        'any.required': 'Discipline is a required field',
        'string.base': 'Given discipline name is not in a valid format'
    }
    ),
    teacher: joi.string().required()
    .messages({
        'any.required': 'Teacher is a required field',
        'string.base': 'Given teacher name is not in a valid format'
    }
    )

})

export { postTestSchema }