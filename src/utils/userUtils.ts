import * as userRepository from '../repositories/userRepository'

import * as encryptUtils from './encryptUtils'

export async function verifyEmailConflict(email: string) {
    const user = await userRepository.findByEmail(email)
    if (user) throw {code: 'email_conflict', message: 'Given email is already in use'}
}

export async function validateSignIn(email: string, password: string) {
    const user = await userRepository.findByEmail(email)
    if (!user) throw {code: 'signin_failed', message: 'Given email and password do not match'}
    if (!(encryptUtils.verifyPasswordMatch(password, user.password))) throw {code: 'signin_failed', message: 'Given email and password do not match'}

    return user.id
}