export interface ITest {
    id: number
    name: string
    pdfUrl: string
    categoryId: number
    teacherDisciplineId: number
}

export type ItestInsertData = Omit<ITest, 'id'>