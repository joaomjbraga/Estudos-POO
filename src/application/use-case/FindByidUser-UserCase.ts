import type { IUserRepository } from "../../Domen/repository/IUserRepository.js";

export class FindByidUserUserCase {
  constructor(private respository: IUserRepository) {}

  async execute(id: string) {
    const user = await this.respository.findByid(id)
    if(!user) throw new Error("Usuário não encontrado.")
    return user
  }
}
