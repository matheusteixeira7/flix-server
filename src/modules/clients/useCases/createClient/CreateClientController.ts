import { Request, Response } from 'express'
import { CreateClientUseCase } from './CreateClientUseCase'

export class CreateClientController {
    constructor(private createClientUseCase: CreateClientUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const data = request.body

        try {
            await this.createClientUseCase.execute(data)

            return response
                .status(201)
                .send({ message: 'Client created', data })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.',
            })
        }
    }
}
