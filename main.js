import express from "express"
import bodyParser from "body-parser"
import registerController from "./controller/registerController.js"
import "dotenv/config"

const app = express()
const bodyJson = bodyParser.json()
const port = process.env.port 



// ROUTE 
app.post('/api/v1/users/register', bodyJson, registerController)

// serer development setup
app.listen(port, (error) => {
   if (error) throw error

   console.log(
      "server running at 4000"
   )
})
