
import express from 'express'
import setRoutes from './routes/index.js'
import {connectDB} from './db/client.js'

const app = express()
const port = 5000


app.disable('x-powered-by')
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

setRoutes(app)

if(connectDB()){
  app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
}

  
