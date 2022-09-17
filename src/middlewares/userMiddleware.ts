import { Request, Response, NextFunction } from 'express'

import { signUpSchema, signInSchema } from '../schemas/userSchema'

export function validateSignUpReqBody(req: Request, res: Response, next: NextFunction) {
    const validation = signUpSchema.validate(req.body)
    if (validation.error) {
        res.status(422).send({ErrorMessage: 'Sign-Up failed due to ' + validation.error})
        return
    }

    next()
}

export function validateSignInReqBody(req: Request, res: Response, next: NextFunction) {
    const validation = signInSchema.validate(req.body)
    if (validation.error) {
        res.status(422).send({ErrorMessage: 'Sign-In failed due to ' + validation.error})
        return
    }

    next()
}