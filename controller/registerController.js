import bcrypt from "bcryptjs"
import usersModels from '../models/usersModels.js'
import ErrorAPI from "../services/api/errorAPI.js"
import SuccessAPI from "../services/api/successAPI.js"

const registerController = async (req, res) => {
   const { username, password } = req.body

   // cek jika field username / password kosong 
   let checkUsername = username.length
   let checkPassword = password.length

   if (checkUsername == 0 | checkPassword == 0) {
      
      let infoAPIError = ErrorAPI(400, false, "Masukan Data Dengan Valid !")

      return res.json(infoAPIError)
   }

   else {

      // hash password dari field password 
      const salt = bcrypt.genSaltSync(10)
      const hashPassword = bcrypt.hashSync(password, salt)

      try {

         // kirim data ke database 
         await usersModels.create({
            username: `${username}`,
            password: `${hashPassword}`
         })

         const infoAPISuccess = SuccessAPI(201, true, "Berhasil Membuat User !", null)
         res.json(infoAPISuccess)

      }

      catch (errorApi) {
         console.log({ errorRegister: errorApi})
         let infoAPIError = ErrorAPI(400, false, "Gagal Membuat User, silakan coba lagi",)
         res.status(400).json(infoAPIError)

      }
   }
}

export default registerController
