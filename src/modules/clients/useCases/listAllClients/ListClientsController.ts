import { Request, Response } from 'express'
import { ListClientsUseCase } from './ListClientsUseCase'

export class ListClientsController {
    constructor(private listClientsUseCase: ListClientsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const all = await this.listClientsUseCase.execute()

            return response.json(all)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.',
            })
        }
    }
}
