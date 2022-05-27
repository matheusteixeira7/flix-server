import { PostgresClientRepository } from '../../repositories/implementations/PostgresClientRepository'
import { DeleteClientController } from './DeleteClientController'
import { DeleteClientUseCase } from './DeleteClientUSeCase'
const postgresClientRepository = new PostgresClientRepository()

const deleteClientUseCase = new DeleteClientUseCase(postgresClientRepository)

const deleteClientController = new DeleteClientController(deleteClientUseCase)

export { deleteClientUseCase, deleteClientController }
