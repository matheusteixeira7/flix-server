import { User } from '../../users/entities/User'

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>
    save(user: User): Promise<void>
}
