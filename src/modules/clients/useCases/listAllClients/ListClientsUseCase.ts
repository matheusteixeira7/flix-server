import { Client } from '../../entities/Client'
import { IClientRepository } from '../../repositories/IClientRepository'

export class ListClientsUseCase {
    constructor(private clientRepository: IClientRepository) {}

    async execute(): Promise<Client[]> {
        const data = await this.clientRepository.findAll()

        return data
    }
}
