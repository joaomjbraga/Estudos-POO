import type { IUserRepository } from "../../Domen/repository/IUserRepository.js";

export class DeleteUserUserCase {
  constructor( private repository: IUserRepository) {}

  async execute(id: string): Promise<boolean> {
    return await this.repository.delete(id)
  }
}
