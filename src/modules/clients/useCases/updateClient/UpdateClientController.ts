import { Request, Response } from 'express'
import { UpdateClientUseCase } from './UpdateClientUseCase'

export class UpdateClientController {
    constructor(private updateClientUseCase: UpdateClientUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const data = request.body

        try {
            await this.updateClientUseCase.execute(id, data)

            return response.status(204).send()
        } catch (err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
}
