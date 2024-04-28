import { Router } from 'express'
import {userController} from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.post('/signup', userController.registerUser)

userRouter.get('/', userController.getAllUsers)

userRouter.get('/test', userController.test)

export default userRouter