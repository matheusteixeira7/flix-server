import { prisma } from '../../../../utils/prisma'
import { Client } from '../../entities/Client'
import { IClientRepository } from '../IClientRepository'

class PostgresClientRepository implements IClientRepository {
    private client: Client[]

    async findById(id: string): Promise<Client | undefined> {
        const result = await prisma.client.findUnique({
            where: {
                id,
            },
        })

        return result
    }

    findByCpf(cpf: string): Promise<Client | undefined> {
        throw new Error('Method not implemented.')
    }

    async findAll(): Promise<Client[]> {
        const result = await prisma.client.findMany()

        return result
    }

    async update(id: string, data: Client): Promise<Client | undefined> {
        return await prisma.client.update({
            where: {
                id,
            },
            data: {
                ...data,
            },
        })
    }

    async delete(client: Client): Promise<void> {
        await prisma.client.delete({
            where: {
                id: client.id,
            },
        })
    }

    async create(client: Client): Promise<void> {
        await prisma.client.create({
            data: {
                ...client,
            },
        })
    }
}

export { PostgresClientRepository }
