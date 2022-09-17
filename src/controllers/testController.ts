import { Request, Response } from 'express'

import * as testService from '../services/testService'
import * as testRepository from '../repositories/testRepository'

export async function postTest(req: Request, res: Response) {
    const { name, pdfUrl, category, discipline, teacher }: {name: string, pdfUrl: string, category: string, discipline: string, teacher: string} = req.body

    await testService.insertTest(name, pdfUrl, category, discipline, teacher)

    res.sendStatus(201)
}

export async function getTestsByDiscipline(req: Request, res: Response) {
    const tests = await testRepository.findByDiscipline()

    res.status(200).send(tests)
}

export async function getTestsByTeacher(req: Request, res: Response) {
    const tests = await testRepository.findByTeacher()

    res.status(200).send(tests)
}