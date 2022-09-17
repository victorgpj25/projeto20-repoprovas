import express from 'express'

import userRouter from './userRouter'
import testRouter from './testRouter'

const router = express.Router()

router.use(userRouter)
router.use(testRouter)

export default router