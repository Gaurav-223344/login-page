
import User from '../db/schema/user.js'


class UserRepository{

    constructor(){
        this.UserModel = User
    }

    async insertUser(userData){
        try{
            const newUser = new this.UserModel(userData)
            await newUser.save()
        }
        catch(err){
            console.log(err)
            throw err
        }
    }

    async getById(id){
        try{
            const user = await this.UserModel.findById(id)
            return user
        }
        catch(err){
            console.log(err)
            throw err
        }
    }

    async getAll(){
        try{
            const users = await this.UserModel.find()
            return users
        }
        catch(err){
            console.log(err)
            throw err
        }
    }
}

export default UserRepository