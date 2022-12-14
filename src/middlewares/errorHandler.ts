import { Request, Response, NextFunction } from 'express'

export default function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if (error.code === 'signin_failed') {
        return res.status(401).send({ErrorMessage: error.message})
    }
    if (error.code === 'no_token') {
        return res.status(401).send({ErrorMessage: error.message})
    }
    if (error.code === 'invalid_token') {
        return res.status(401).send({ErrorMessage: error.message})
    }
    if (error.code === 'category_not_registered') {
        return res.status(404).send({ErrorMessage: error.message})
    }
    if (error.code === 'discipline_not_registered') {
        return res.status(404).send({ErrorMessage: error.message})
    }
    if (error.code === 'teacher_not_registered') {
        return res.status(404).send({ErrorMessage: error.message})
    }
    if (error.code === 'teacher_discipline_not_registered') {
        return res.status(404).send({ErrorMessage: error.message})
    }
    if (error.code === 'email_conflict') {
        return res.status(409).send({ErrorMessage: error.message})
    }
    if (error.code === 'test_already_registered') {
        return res.status(409).send({ErrorMessage: error.message})
    }

    res.sendStatus(500)
}