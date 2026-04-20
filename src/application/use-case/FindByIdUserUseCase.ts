import { AppError } from "../../Domen/errors/AppError.js";
import type { IUserRepository } from "../../Domen/repository/IUserRepository.js";

export class FindByIdUserUseCase {
  constructor(private respository: IUserRepository) {}

  async execute(id: string) {
    const user = await this.respository.findByid(id)
    if(!user) throw new AppError("Usuário não encontrado.", 404)
    return user
  }
}
