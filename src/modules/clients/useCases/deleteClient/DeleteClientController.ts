import { Request, Response } from 'express'
import { DeleteClientUseCase } from './DeleteClientUSeCase'

export class DeleteClientController {
    constructor(private deleteClientUseCase: DeleteClientUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        try {
            await this.deleteClientUseCase.execute(id)

            return response.status(204).send()
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.',
            })
        }
    }
}
