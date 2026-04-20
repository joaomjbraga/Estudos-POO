import type { User } from "../../Domen/Entity/User.js";
import type { IUserRepository } from "../../Domen/repository/IUserRepository.js";

export class GetAllUserUserCase {
  constructor(private repository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return await this.repository.findAll()
  }
}
