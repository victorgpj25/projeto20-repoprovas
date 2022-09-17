import { prisma } from '../config/database'

import * as categoryTypes from '../types/categoryTypes'

export async function findByName(categoryName: string) {
    const category: categoryTypes.ICategory | null = await prisma.categories.findUnique({
        where: {
            name: categoryName
        }
    })
    return category
}