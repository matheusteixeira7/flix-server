import { Client } from '../../entities/Client'
import { IClientRepository } from '../../repositories/IClientRepository'

export class UpdateClientUseCase {
    constructor(private clientRepository: IClientRepository) {}

    async execute(id: string, data: Client): Promise<void> {
        try {
            await this.clientRepository.update(id, data)
        } catch (err) {
            console.log(err.message)
            throw new Error(err.message)
        }
    }
}
