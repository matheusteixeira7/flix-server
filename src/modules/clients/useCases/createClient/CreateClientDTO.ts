export interface ICreateClientRequestDTO {
    id?: string
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
    status: string
}
