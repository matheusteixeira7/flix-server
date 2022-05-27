import { Client } from '../entities/Client'

export interface IClientRepository {
    create(client: Client): Promise<void>
    findById(id: string): Promise<Client | undefined>
    findByCpf(cpf: string): Promise<Client | undefined>
    findAll(): Promise<Client[]>
    update(id: string, data: Client): Promise<Client | undefined>
    delete(client: Client): Promise<void>
}
