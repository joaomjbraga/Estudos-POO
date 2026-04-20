import { AppError } from "../../Domen/errors/AppError.js";
import type { IUserRepository } from "../../Domen/repository/IUserRepository.js";

export class DeleteUserUseCase {
  constructor( private repository: IUserRepository) {}

  async execute(id: string): Promise<boolean> {
    const user = await this.repository.findByid(id)
    if (!user) {
      throw new AppError("Usuário não encontrado.", 404)
    }
    return await this.repository.delete(id)
  }
}
