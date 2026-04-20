import { Router } from "express"
import { UserController } from "../controllers/UsersController.js"

export function CreateUserRoutes () {
  const routes = Router()
  const userController = new UserController()

  routes.get('/', userController.getAllUsers)
  routes.post('/', userController.createUser)
  routes.get('/:id', userController.getUserById)
  routes.put('/:id', userController.updateUser)
  routes.delete('/:id', userController.deleteUser)

  return routes
}
