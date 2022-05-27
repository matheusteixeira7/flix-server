import { PostgresClientRepository } from '../../repositories/implementations/PostgresClientRepository'
import { ListClientsController } from './ListClientsController'
import { ListClientsUseCase } from './ListClientsUseCase'

const postgresClientRepository = new PostgresClientRepository()

const listClientUseCase = new ListClientsUseCase(postgresClientRepository)

const listClientController = new ListClientsController(listClientUseCase)

export { listClientUseCase, listClientController }
