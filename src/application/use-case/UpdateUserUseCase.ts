import { User } from "../../Domen/Entity/User.js";
import type { IUserRepository } from "../../Domen/repository/IUserRepository.js";
import type { EditUserDTO } from "../DTOs/EditUserDTO.js";

export class UpdateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(dto: EditUserDTO): Promise<boolean> {
    const userepository = await this.repository.findByid(dto.id)
    if(!userepository) throw new Error("Usuário não encontrado.")

    const existingEmail = await this.repository.findByEmail(dto.email)
    if(existingEmail && existingEmail.id !== dto.id) {
      throw new Error("Email já está em uso.")
    }

    const user = new User(dto.id, dto.name, dto.email, userepository.password)
    return await this.repository.update(user)
  }
}
