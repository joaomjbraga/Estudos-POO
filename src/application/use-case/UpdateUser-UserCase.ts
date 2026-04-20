import { User } from "../../Domen/Entity/User.js";
import type { IUserRepository } from "../../Domen/repository/IUserRepository.js";
import type { EditUserDTO } from "../DTOs/EditUserDTO.js";

export class UpdateUserUserCase {
  constructor(private repository: IUserRepository) {}

  async execute(dto: EditUserDTO): Promise<Boolean> {
    const userepository = await this.repository.findByid(dto.id)
    if(!userepository) throw new Error("Usuário não encontrado.")

    const user = new User(dto.id, dto.name, dto.email, userepository.password)
    return this.repository.update(user)
  }
}
