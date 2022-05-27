import { Client } from '../../entities/Client'
import { IMailProvider } from '../../providers/IMailProvider'
import { IClientRepository } from '../../repositories/IClientRepository'
import { ICreateClientRequestDTO } from './CreateClientDTO'

export class CreateClientUseCase {
    constructor(
        private clientRepository: IClientRepository,
        private mailProvider: IMailProvider
    ) {}

    async execute(data: ICreateClientRequestDTO): Promise<void> {
        const newClient = new Client(data)

        await this.clientRepository.create(newClient)

        this.mailProvider.sendMail({
            to: {
                email: newClient.email,
                name: newClient.name,
            },
            from: {
                email: 'contato@flixtelecom.com.br',
                name: 'Flix Telecom',
            },
            subject: 'Novo registro no sistema',
            body: '<p>Verifique a lista de clientes para cadastrar o novo usuário</p>',
        })
    }
}
