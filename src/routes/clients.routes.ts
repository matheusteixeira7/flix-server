import { Router } from 'express'
import { createClientController } from '../modules/clients/useCases/createClient'
import { deleteClientController } from '../modules/clients/useCases/deleteClient'
import { listClientController } from '../modules/clients/useCases/listAllClients'
import { updateClientController } from '../modules/clients/useCases/updateClient'

const clientsRouter = Router()

clientsRouter.get('/', (request, response) => {
    return listClientController.handle(request, response)
})

clientsRouter.post('/', (request, response) => {
    return createClientController.handle(request, response)
})

clientsRouter.delete('/:id', (request, response) => {
    return deleteClientController.handle(request, response)
})

clientsRouter.put('/:id', (request, response) => {
    return updateClientController.handle(request, response)
})

export { clientsRouter }
