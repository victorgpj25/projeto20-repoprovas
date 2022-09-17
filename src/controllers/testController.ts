import { Request, Response } from 'express'

import * as testService from '../services/testService'

export async function postTest(req: Request, res: Response) {
    const { name, pdfUrl, category, discipline, teacher }: {name: string, pdfUrl: string, category: string, discipline: string, teacher: string} = req.body

    await testService.insertTest(name, pdfUrl, category, discipline, teacher)

    res.sendStatus(201)
}


export async function getTestsByDiscipline(req: Request, res: Response) {
    const disciplineId = Number(req.params.id)
    const tests = await testService.getTestsByDisciplineId(disciplineId)

    res.status(200).send(tests)
}