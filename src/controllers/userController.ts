import { Request, Response } from 'express'

import * as userService from '../services/userService'

export async function signUp(req: Request, res: Response) {
    const { email, password }: {email: string, password: string } = req.body
    await userService.signUp(email, password)

    res.sendStatus(201)
}

export async function signIn(req: Request, res: Response) {
    const { email, password }: {email: string, password: string } = req.body
    const token = await userService.signIn(email, password)

    res.status(200).send(token)
}