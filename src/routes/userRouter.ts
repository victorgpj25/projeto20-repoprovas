import express from 'express'

import { signUp, signIn } from '../controllers/userController'
import { validateAuthReqBody } from '../middlewares/userMiddleware'

const userRouter = express.Router()

userRouter.post('/signup', validateAuthReqBody, signUp)
userRouter.post('/signin', validateAuthReqBody, signIn)

export default userRouter