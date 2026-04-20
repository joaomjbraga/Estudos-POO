import express from 'express'
import { CreateUserRoutes } from './infra/routes/UserRoute.js'


const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())

app.use('/api/v1/users', CreateUserRoutes())

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
