import { Router } from 'express'
import { prisma } from '../utils/prisma'
import { clientsRouter } from './clients.routes'

const router = Router()

router.use('/clients', clientsRouter)

router.delete('/test', async (req, res) => {
    const asd = await prisma.client.delete({
        where: {
            id: 'fec5be65-e98d-4d7f-9eca-a3713c40872e',
        },
    })

    res.json(asd)
})

export { router }
