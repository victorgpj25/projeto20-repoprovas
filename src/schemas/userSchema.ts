import joi from 'joi'

const signUpSchema = joi.object({
    email: joi.string().email().required()
        .messages({
            'any.required': 'Email is a required field',
            'string.base': 'Given email is not valid',
            'string.email': 'Given email is not valid'
        }
    ),
    password: joi.string().required()
        .messages({
            'any.required': 'Password is a required field',
            'string.base': 'Given password is not valid'
        }
    ),
    confirmPassword: joi.any().equal(joi.ref('password')).required()
    .messages({
        'any.required': 'Confirm password is a required field',
        'any.only': 'Confirm password does not match'
    }
    )
})

const signInSchema = joi.object({
    email: joi.string().email().required()
        .messages({
            'any.required': 'Email is a required field',
            'string.base': 'Given email is not valid',
            'string.email': 'Given email is not valid'
        }
    ),
    password: joi.string().required()
        .messages({
            'any.required': 'Password is a required field',
            'string.base': 'Given password is not valid'
        }
    )
})

export { signUpSchema, signInSchema }