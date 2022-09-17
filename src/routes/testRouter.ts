import express from 'express'

import { postTest, getTestsByDiscipline, getTestsByTeacher } from '../controllers/testController'
import { validatePostTestReqBody } from '../middlewares/testMiddleware'
import { verifyToken } from '../middlewares/authMiddleware'

const testRouter = express.Router()

testRouter.post('/tests', verifyToken, validatePostTestReqBody, postTest)
testRouter.get('/tests/discipline', verifyToken, getTestsByDiscipline)
testRouter.get('/tests/teacher', verifyToken, getTestsByTeacher)

export default testRouter