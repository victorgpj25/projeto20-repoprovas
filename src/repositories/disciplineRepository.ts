import { prisma } from '../config/database'

import * as disciplineTypes from '../types/disciplineTypes'

export async function findByName(disciplineName: string) {
    const discipline: disciplineTypes.IDiscipline | null = await prisma.disciplines.findUnique({
        where: {
            name: disciplineName
        }
    })
    return discipline
}