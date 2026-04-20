import { User } from "../../Domen/Entity/User.js"
import type { CreateUserUserDTO } from "../DTOs/CreateUserDTO.js"

export class CreateUserUserCase {

  async execute(dto: CreateUserUserDTO): Promise<User> {
    const user = new User(
      dto.id,
      dto.name,
      dto.email,
      dto.password
    )
    return user
  }
}
