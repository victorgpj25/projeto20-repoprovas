import { Request, Response, NextFunction } from 'express'

import { postTestSchema } from '../schemas/testSchema'

export function validatePostTestReqBody(req: Request, res: Response, next: NextFunction) {
    const validation = postTestSchema.validate(req.body)
    if (validation.error) {
        res.status(422).send({ErrorMessage: 'Post test failed due to ' + validation.error})
        return
    }

    next()
}