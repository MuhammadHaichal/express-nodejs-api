import { body } from "express-validator";

const validationRegister = [
   body("username").trim().isLength({min: 5, max: 35}).notEmpty(),
   body("password").trim().isLength({min: 10}).notEmpty(), 
   body("email").trim().isEmail().isLength({max: 50}).notEmpty()
]

export default validationRegister
