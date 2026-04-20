import { User } from "../../Domen/Entity/User.js"
import { AppError } from "../../Domen/errors/AppError.js"
import type { IUserRepository } from "../../Domen/repository/IUserRepository.js"
import type { CreateUserUserDTO } from "../DTOs/CreateUserDTO.js"

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(dto: CreateUserUserDTO): Promise<User> {
    const existingEmail = await this.repository.findByEmail(dto.email)
    if (existingEmail) {
      throw new AppError("Email já está em uso.", 409)
    }

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
