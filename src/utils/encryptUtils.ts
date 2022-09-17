import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const jwtKey = String(process.env.JWT_SECRET) || 'superSecretKey'

export async function encryptUserPassword(password: string) {
    return bcrypt.hash(password, 10)
}

export async function generateUserToken(userId: number) {
    return jwt.sign({ userId }, jwtKey, { expiresIn: 86400 }); // token expires in 24 hours
}

export async function verifyPasswordMatch(password: string, encryptedPassword: string) {
    return bcrypt.compareSync(password, encryptedPassword)
}