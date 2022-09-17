import express from 'express'

import { postTest, getTestsByDiscipline } from '../controllers/testController'
import { validatePostTestReqBody } from '../middlewares/testMiddleware'
import { verifyToken } from '../middlewares/authMiddleware'
import { validateReqParamsId } from '../middlewares/reqParamsMiddleware'

const testRouter = express.Router()

testRouter.post('/tests', verifyToken, validatePostTestReqBody, postTest)
testRouter.get('/tests/discipline/:id', verifyToken, validateReqParamsId, getTestsByDiscipline)

export default testRouter