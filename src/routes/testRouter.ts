import express from 'express'

import { postTest } from '../controllers/testController'
import { validatePostTestReqBody } from '../middlewares/testMiddleware'
import { verifyToken } from '../middlewares/authMiddleware'

const testRouter = express.Router()

testRouter.post('/tests', verifyToken, validatePostTestReqBody, postTest)

export default testRouter