import * as userRepository from '../repositories/userRepository'

import * as userUtils from "../utils/userUtils"
import * as encryptUtils from '../utils/encryptUtils'

export async function signUp(email: string, password: string) {
    await userUtils.verifyEmailConflict(email)
    const encryptedPassword = await encryptUtils.encryptUserPassword(password)

    await userRepository.insert({email, password: encryptedPassword})
}

export async function signIn(email: string, password: string) {
    const userId = await userUtils.validateSignIn(email, password)
    const token = await encryptUtils.generateUserToken(Number(userId))

    return token
}