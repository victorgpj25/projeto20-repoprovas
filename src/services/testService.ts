
import * as testRepository from '../repositories/testRepository'

import * as postTestUtils from "../utils/postTestUtils"

export async function insertTest(name: string, pdfUrl: string, category: string, discipline: string, teacher: string) {
    const categoryId = await postTestUtils.validateCategory(category)
    const disciplineId = await postTestUtils.validateDiscipline(discipline)
    const teacherId = await postTestUtils.validateTeacher(teacher)
    const teacherDisciplineId = await postTestUtils.getTeacherDisciplineId(teacherId, disciplineId)

    await testRepository.insert({name, pdfUrl, categoryId, teacherDisciplineId})
}