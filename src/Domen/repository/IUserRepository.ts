import type { User } from "../Entity/User.js";

export interface IUserRepository {
  create(user: User): Promise<void>
  findByid(id: string): Promise<User | null>
  findAll(): Promise<User[]>
  update(user: User): Promise<Boolean>
  delete(id: string): Promise<Boolean>
}

