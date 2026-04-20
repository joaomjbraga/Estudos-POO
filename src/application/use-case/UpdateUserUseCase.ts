import { User } from "../../Domen/Entity/User.js";
import { AppError } from "../../Domen/errors/AppError.js";
import type { IUserRepository } from "../../Domen/repository/IUserRepository.js";
import type { EditUserDTO } from "../DTOs/EditUserDTO.js";

export class UpdateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(dto: EditUserDTO): Promise<boolean> {
    const userepository = await this.repository.findByid(dto.id)
    if(!userepository) throw new AppError("Usuário não encontrado.", 404)

    const existingEmail = await this.repository.findByEmail(dto.email)
    if(existingEmail && existingEmail.id !== dto.id) {
      throw new AppError("Email já está em uso.", 409)
    }

    const user = new User(dto.id, dto.name, dto.email, userepository.passwordHash)
    return await this.repository.update(user)
  }
}
