import { User } from "../../Domen/Entity/User.js"
import type { IUserRepository } from "../../Domen/repository/IUserRepository.js"
import type { CreateUserUserDTO } from "../DTOs/CreateUserDTO.js"

export class CreateUserUserCase {
  constructor(private repository: IUserRepository) {}

  async execute(dto: CreateUserUserDTO): Promise<User> {
    const user = new User(
      dto.id,
      dto.name,
      dto.email,
      dto.password
    )
    await this.repository.create(user)
    return user
  }
}
