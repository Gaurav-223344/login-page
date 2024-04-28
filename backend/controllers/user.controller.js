
import userService from "../services/user.service.js";


export class UserController{

    constructor(){
        this.userService = userService
    }

    async registerUser(req, res){
        await userService.registerUser(req.body)
        .then((data)=>{
            return res.json(data)
        })
        .catch((err)=>{
            return res.status(500).json(err)
        })
    }

    async getAllUsers(req, res){
        await userService.getAllUsers()
        .then((data)=>{
            return res.json(data)
        })
        .catch((err)=>{
            return res.status(500).json(err)
        })
    }

    async test(req, res){
        return res.json({"Success" : "True"})
    }

}


export const userController = new UserController()