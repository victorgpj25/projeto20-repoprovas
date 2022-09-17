import { prisma } from '../config/database'

import * as testTypes from '../types/testTypes'

export async function insert(testInsertData: testTypes.ItestInsertData) {
    await prisma.tests.create({
        data: testInsertData
    })
}

export async function findByDiscipline() {
    const tests = await prisma.terms.findMany({
        select: {
            number: true,
            disciplines: {
                select: {
                    name: true,
                    teachersDisciplines: {
                        select: {
                            tests: { distinct: ['categoryId'],
                                select: {
                                    category: {
                                        select: {
                                            name: true,
                                            tests: {
                                                select: {
                                                    id: true,
                                                    name: true,
                                                    pdfUrl: true,
                                                    teacherDiscipline: {
                                                        select: {
                                                            teacher: {
                                                                select: {
                                                                    name: true
                                                                }
                                                            }
                                                        }
                                                    }

                                                }
                                            }
                                        }
                                    }

                                }
                            }
                        }
                    }
                }
            }
        }
    })
    return tests
}