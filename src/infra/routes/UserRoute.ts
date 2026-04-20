import { Router } from "express"
import { UserController } from "../controllers/UsersController.js"

const userController = new UserController()

export function CreateUserRoutes () {
  const routes = Router()

  routes.get('/', userController.getAllUsers.bind(userController))
  routes.post('/', userController.createUser.bind(userController))
  routes.get('/:id', userController.getUserById.bind(userController))
  routes.put('/:id', userController.updateUser.bind(userController))
  routes.delete('/:id', userController.deleteUser.bind(userController))

  return routes
}
