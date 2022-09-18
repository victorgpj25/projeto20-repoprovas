import * as testRepository from '../repositories/testRepository'
import * as categoryRepository from '../repositories/categoryRepository'
import * as disciplineRepository from '../repositories/disciplineRepository'
import * as teacherRepository from '../repositories/teacherRepository'
import * as teacherDisciplineRepository from '../repositories/teacherDisciplineRepository'


export async function validateCategory(category: string) {
    const categoryData = await categoryRepository.findByName(category)
    if (!categoryData) throw {code: 'category_not_registered', message: 'Given category name is not registered'}

    return categoryData.id
}

export async function validateDiscipline(discipline: string) {
    const disciplineData = await disciplineRepository.findByName(discipline)
    if (!disciplineData) throw {code: 'discipline_not_registered', message: 'Given discipline name is not registered'}

    return disciplineData.id
}

export async function validateTeacher(teacher: string) {
    const teacherData = await teacherRepository.findByName(teacher)
    if (!teacherData) throw {code: 'teacher_not_registered', message: 'Given teacher name is not registered'}

    return teacherData.id
}

export async function getTeacherDisciplineId(teacherId: number, disciplineId: number) {
    const teacherDisciplineData = await teacherDisciplineRepository.findByIds(teacherId, disciplineId)
    if (!teacherDisciplineData) throw {code: 'teacher_discipline_not_registered', message: 'Teacher discpline searched is not registered'}

    return teacherDisciplineData.id
}


export async function verifyTestConflict(pdfUrl: string) {
    const testAlreadyRegistered = await testRepository.findByUrl(pdfUrl)
    if (testAlreadyRegistered) throw {code: 'test_already_registered', message: 'Test is already registered'}
}