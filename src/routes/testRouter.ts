import express from 'express'

import { postTest, getTestsByDiscipline } from '../controllers/testController'
import { validatePostTestReqBody } from '../middlewares/testMiddleware'
import { verifyToken } from '../middlewares/authMiddleware'

const testRouter = express.Router()

testRouter.post('/tests', verifyToken, validatePostTestReqBody, postTest)
testRouter.get('/tests/discipline', verifyToken, getTestsByDiscipline)

export default testRouter