import { prisma } from '../config/database'

import * as teacherDisciplineTypes from '../types/teacherDisciplineTypes'

export async function findByIds(teacherId: number, disciplineId: number) {
    const teacherDiscipline: teacherDisciplineTypes.ITeacherDiscipline | null = await prisma.teachersDisciplines.findFirst({
        where: {
            teacherId: teacherId,
            disciplineId: disciplineId
        }
    })
    return teacherDiscipline
}