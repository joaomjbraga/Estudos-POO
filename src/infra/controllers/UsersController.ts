import type { Request, Response } from "express"

export class UserController {

 async getAllusers(_: Request, res: Response) {
  return res.status(200).json({message: "users..."})
 }

 async  createUser (req: Request, res: Response) {
  const user = req.body
  return res.status(201).json({message: `Usuário ${user.name} criado com sucesso!`})
 }

 async getUserById (req: Request, res: Response) {
  const { id } = req.params

  if(!id) {
    return res.status(404).json({message: "Não encontrado"})
  }

  return res.status(200).json({message: `Usuário com ID: ${id} encontrado.`})
 }

 async updateUser (req: Request, res: Response) {
  const { id } = req.params
  return res.json({message: `Usuário ${id} foi atualizado.`})
 }

 async deleteUser (req: Request, res: Response) {
  const { id } = req.params
  return res.json({message: `Usuário ${id} foi deletado.`})
 }
}
