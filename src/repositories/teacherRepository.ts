import { prisma } from '../config/database'

import * as teacherTypes from '../types/teacherTypes'

export async function findByName(teacherName: string) {
    const teacher: teacherTypes.ITeacher | null = await prisma.teachers.findUnique({
        where: {
            name: teacherName
        }
    })
    return teacher
}