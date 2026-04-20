import { User } from "../../Domen/Entity/User.js";
import type { IUserRepository } from "../../Domen/repository/IUserRepository.js";

export class UserRepositoryInMemory implements IUserRepository {
  private users: User[] = []

  async create(user: User): Promise<void> {
    this.users.push(user)
  }

  async findByid(id: string): Promise<User | null> {
    const user = this.users.find(user => user.id === id)
    return user ?? null
  }

  async findAll(): Promise<User[] | []> {
    return this.users
  }

  async update(user: User): Promise<boolean> {
    const index = this.users.findIndex(u => u.id === user.id)
    if (index === -1) return false

    this.users[index] = user
    return true
  }

  async delete(id: string): Promise<boolean> {
    const index = this.users.findIndex(user => user.id === id)
    if (index === -1) return false

    this.users.splice(index, 1)
    return true
  }
}
