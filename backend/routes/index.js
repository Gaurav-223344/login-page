import userRouter from "./user.router.js";


export default function setRoutes(app) {
    app.use('/user', userRouter)
}