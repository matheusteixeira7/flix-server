import { PostgresClientRepository } from '../../repositories/implementations/PostgresClientRepository'
import { UpdateClientController } from './UpdateClientController'
import { UpdateClientUseCase } from './UpdateClientUseCase'

const postgresClientRepository = new PostgresClientRepository()

const updateClientUseCase = new UpdateClientUseCase(postgresClientRepository)

const updateClientController = new UpdateClientController(updateClientUseCase)

export { updateClientUseCase, updateClientController }
