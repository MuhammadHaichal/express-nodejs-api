import bcrypt from "bcryptjs"
import { validationResult } from "express-validator"

import usersModels from '../models/users-models.js'
import ErrorAPI from "../services/api/errorAPI.js"
import SuccessAPI from "../services/api/successAPI.js"




const registerController = async (req, res) => {
   const { username, password, email } = req.body

   let validasi = validationResult(req)

   // jika users tidak menepati validasi 
   if (!validasi.isEmpty()) {

      let infoAPIError = ErrorAPI(400, false, validasi.mapped())
      return res.status(400).json(infoAPIError)
   }

   else {

      // hash password dari field password 
      const salt = bcrypt.genSaltSync(10)
      const hashPassword = bcrypt.hashSync(password, salt)

      try {

         // kirim data ke database 
         await usersModels.create({
            username: username,
            password: hashPassword,
            email: email
         })

         const infoAPISuccess = SuccessAPI(201, true, "Berhasil Membuat User !", null)
         res.json(infoAPISuccess)

      }

      catch (errorApi) {
         console.log({ errorRegister: errorApi })
         let infoAPIError = ErrorAPI(400, false, "Gagal Membuat User, silakan coba lagi",)
         res.status(400).json(infoAPIError)
      }
   }
}

export default registerController
