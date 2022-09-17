import { allowedNodeEnvironmentFlags } from 'process'
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
                            tests: {
                                select: {
                                    category: {
                                        select: {
                                            name: true
                                        }
                                    },
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

    })
    return tests
}

export async function findByTeacher() {
    const tests = await prisma.teachers.findMany({
        select: {
            name: true,
            teachersDisciplines: {
                select: {
                    tests: {
                        select: {
                            category: {
                                select: {
                                    name: true
                                }
                            },
                            name: true,
                            pdfUrl: true,
                            teacherDiscipline: {
                                select: {
                                    discipline: {
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
    })
    return tests
} 