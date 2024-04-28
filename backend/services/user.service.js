import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs'

import UserRepository from '../repositories/user.repository.js'

class UserService{

    constructor(){
        console.log("---UserService initialized---")
        this.userRepository = new UserRepository()
    }

    async hashPassword(password){
        try {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)
            return hash
        } catch (error) {
            throw error
        }

    }

    async confirmPassword(confirmPassword, hashedPassword){
        try{
            return await bcrypt.compare(confirmPassword, hashedPassword)
        } catch (error) {
            throw error
        }
    }

    async registerUser(userParams){

        if (userParams.password !== userParams.confirmPassword){
            throw new Error('Passwords do not match')
        }

        const userData = {
            id : uuidv4(),
            firstName : userParams.firstName,
            lastName : userParams.lastName,
            username : userParams.username,
            email : userParams.email,
            password : await this.hashPassword(userParams.password)
        }

        await this.userRepository.insertUser(userData)
    }


    async getAllUsers(){
        return await this.userRepository.getAll()
    }
}

const userService = new UserService()
export default userService