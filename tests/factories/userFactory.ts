import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'
import { prisma } from '../../src/config/database'

export async function signUpUser() {
    const user = {
        email: faker.internet.email(),
        password: "123456",
        confirmPassword: "123456"
    }
    return user
}

export async function createUser() {
    const user = {
        email: faker.internet.email(),
        password: "123456"
    }
    
    await prisma.users.create({
        data: {
            email: user.email,
            password: await bcrypt.hash(user.password, 10)
        }
    })

    return user
}