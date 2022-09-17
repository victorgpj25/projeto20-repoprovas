import { prisma } from '../config/database'

import * as testTypes from '../types/testTypes'

export async function insert(testInsertData: testTypes.ItestInsertData) {
    await prisma.tests.create({
        data: testInsertData
    })
}