import { PostgresClientRepository } from '../../repositories/implementations/PostgresClientRepository'

export class DeleteClientUseCase {
    constructor(private deleteClientRepository: PostgresClientRepository) {}

    async execute(id: string): Promise<void> {
        try {
            const client = await this.deleteClientRepository.findById(id)

            if (!client) {
                throw new Error('Client not found.')
            }

            await this.deleteClientRepository.delete(client)
        } catch (err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
}
