import * as userFactory from './factories/userFactory'
import * as testFactory from './factories/testFactory'
import { prisma } from '../src/config/database'
import { faker } from '@faker-js/faker'
import supertest from 'supertest'
import app from '../src/app'

const agent = supertest(app)
let token: string

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Users";`
    await prisma.$executeRaw`TRUNCATE TABLE "Tests";`

    const user = await userFactory.createUser()
    const response = await agent.post('/signin').send(user)
    token = response.text
})

describe('POST /tests', () => {
    it('should answer with status 201 when data and credentials are valid', async () => {
        const testData = await testFactory.generateTestData()
        const response = await agent.post('/tests').send(testData).set({Authorization: `Bearer ${token}`})

        const createdTest = await prisma.tests.findFirst({
            where: {
                pdfUrl: testData.pdfUrl
            }
        })

        expect(response.status).toBe(201)
        expect(createdTest).not.toBeNull()
    })

    it('should answer with status 401 when credentials are invalid', async () => {
        const testData = await testFactory.generateTestData()
        const response = await agent.post('/tests').send(testData)

        const createdTest = await prisma.tests.findFirst({
            where: {
                pdfUrl: testData.pdfUrl
            }
        })

        expect(response.status).toBe(401)
        expect(createdTest).toBeNull()
    })
  
    it('should answer with status 422 when data is malformed', async () => {
        const testData = await testFactory.generateTestData()
        testData.pdfUrl = 'invalid url'
        const response = await agent.post('/tests').send(testData).set({Authorization: `Bearer ${token}`})
        
        const createdTest = await prisma.tests.findFirst({
            where: {
                pdfUrl: testData.pdfUrl
            }
        })

        expect(response.status).toBe(422)
        expect(createdTest).toBeNull()
    })
  
    it('should answer with status 409 when test is already registered', async () => {
      const testData = await testFactory.generateTestData()

      await agent.post('/tests').send(testData).set({Authorization: `Bearer ${token}`})
      const response = await agent.post('/tests').send(testData).set({Authorization: `Bearer ${token}`})

      const tests = await prisma.tests.findMany()

      expect(response.status).toBe(409)
      expect(tests.length).toBe(1)
    })
})

describe('GET /tests/discipline', () => {
    it('should answer with status 200 when credentials are valid', async () => {
        const response = await agent.get('/tests/discipline').set({Authorization: `Bearer ${token}`})
        expect(response.status).toBe(200)
        expect(response.body).not.toBeNull()
    })

    it('should answer with status 401 when credentials are invalid', async () => {
        const response = await agent.get('/tests/discipline')
        expect(response.status).toBe(401)
    })
})

describe('GET /tests/teacher', () => {
    it('should answer with status 200 when credentials are valid', async () => {
        const response = await agent.get('/tests/teacher').set({Authorization: `Bearer ${token}`})
        expect(response.status).toBe(200)
        expect(response.body).not.toBeNull()
    })

    it('should answer with status 401 when credentials are invalid', async () => {
        const response = await agent.get('/tests/teacher')
        expect(response.status).toBe(401)
    })
})



afterAll(async () => {
    await prisma.$disconnect()
})