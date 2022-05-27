import { v4 as uuidv4 } from 'uuid'

export class Client {
    id: string
    name: string
    cpf: string
    birthdate: string
    phone1: string
    phone2: string
    whatsapp: string
    email: string
    cep: string
    address: string
    number: string
    complement: string
    neighborhood: string
    city: string
    state: string
    status: string
    // seller: {
    //     id: string
    //     name: string
    //     picture: string
    // }

    // plans: {
    //     id: string
    //     internet: string
    //     tv: string
    //     phone: string
    // }

    createdAt: Date
    updatedAt: Date

    constructor(props: Omit<Client, 'id'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuidv4()
        }
    }
}
