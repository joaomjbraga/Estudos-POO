import { randomUUID } from "crypto";
import { type Request, type Response } from "express";
import { CreateUserUserDTO } from "../../application/DTOs/CreateUserDTO.js";
import { EditUserDTO } from "../../application/DTOs/EditUserDTO.js";
import { CreateUserUserCase } from "../../application/use-case/CreateUser-UserCase.js";
import { DeleteUserUserCase } from "../../application/use-case/DeleteUser-UserCase.js";
import { FindByidUserUserCase } from "../../application/use-case/FindByidUser-UserCase.js";
import { GetAllUserUserCase } from "../../application/use-case/GetAllUser-UserCase.js";
import { UpdateUserUserCase } from "../../application/use-case/UpdateUser-UserCase.js";
import { UserRepositoryInMemory } from "../repository/UserRepositoryInMemory.js";

export class UserController {
  private repository: UserRepositoryInMemory
  constructor() {
    this.repository = new UserRepositoryInMemory()
  }

  async getAllUsers(_: Request, res: Response) {
    const useCase = new GetAllUserUserCase(this.repository);
    const users = await useCase.execute();
    return res.status(200).json(users);
  }

  async createUser(req: Request, res: Response) {
    const useCase = new CreateUserUserCase(this.repository);
    const dto = new CreateUserUserDTO(
      randomUUID(),
      req.body.name,
      req.body.email,
      req.body.password,
    )
    const user = await useCase.execute(dto);
    return res.status(201).json({ message: `Usuário ${user.name} criado com sucesso!` });
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }
    try {
      const useCase = new FindByidUserUserCase(this.repository);
      const user = await useCase.execute(id);
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }
    try {
      const dto = new EditUserDTO(id, req.body.name, req.body.email);
      const useCase = new UpdateUserUserCase(this.repository);
      await useCase.execute(dto);
      return res.status(200).json({ message: `Usuário ${id} atualizado.` });
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }
    try {
      const useCase = new DeleteUserUserCase(this.repository);
      await useCase.execute(id);
      return res.status(200).json({ message: `Usuário ${id} deletado.` });
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }
}
