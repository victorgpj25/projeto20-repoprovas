import { faker } from '@faker-js/faker'
import { getRandomItemFromArray } from '../../src/utils/testUtils'
import bcrypt from 'bcrypt'
import { prisma } from '../../src/config/database'

export async function generateTestData() {
    const categories = ['Projeto', 'Prática', 'Recuperação']
    const disciplines = ['HTML e CSS', 'JavaScript', 'React']

    const testData = {
        name: faker.lorem.words(2),
        pdfUrl: faker.internet.url(),
        category: getRandomItemFromArray(categories),
        discipline: getRandomItemFromArray(disciplines),
        teacher: 'Diego Pinho'
    }
    return testData
}