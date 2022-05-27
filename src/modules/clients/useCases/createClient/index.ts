import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'
import { PostgresClientRepository } from '../../repositories/implementations/PostgresClientRepository'
import { CreateClientController } from './CreateClientController'
import { CreateClientUseCase } from './CreateClientUseCase'

const postgresClientRepository = new PostgresClientRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createClientUseCase = new CreateClientUseCase(
    postgresClientRepository,
    mailtrapMailProvider
)

const createClientController = new CreateClientController(createClientUseCase)

export { createClientUseCase, createClientController }
