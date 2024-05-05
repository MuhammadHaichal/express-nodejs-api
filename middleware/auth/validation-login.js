import { body } from "express-validator";

const validationLogin = [
   body("email").trim().isEmail().notEmpty(),
   body("password").trim().notEmpty()
]

export default validationLogin
