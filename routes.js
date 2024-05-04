import bodyParser from "body-parser"
import express from "express"

import registerController from "./controller/registerController.js"


const app = express()
const bodyJson = bodyParser.json()


const routes = [
   app.post('/api/v1/users/register', bodyJson, registerController)
]

export default routes
