import express from "express"
import bodyParser from "body-parser"

import loginController from "../controller/login-controller.js"
import registerController from "../controller/register-controller.js"
import validationRegister from "../middleware/auth/validation-register.js"
import validationLogin from "../middleware/auth/validation-login.js"


const app = express()
const bodyJson = bodyParser.json()

let authRoutes =  [
  app.post("/login", bodyJson, validationLogin, loginController),
  app.post('/register', bodyJson, validationRegister, registerController)
]



export default authRoutes 





