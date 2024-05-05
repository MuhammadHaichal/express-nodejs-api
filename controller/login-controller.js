import { validationResult } from "express-validator"
import usersModels from "../models/users-models.js"
import ErrorApi from "../services/api/errorAPI.js"
import SuccessAPi from "../services/api/successAPI.js"
import bcrypt from "bcryptjs"


const loginController = async (req, res) => {
  
   // validasi jika user kirim data tidak valid 
   let validasi = validationResult(req) 

   if (!validasi.isEmpty()) {
      let infoApiError = ErrorApi(400, false, validasi.mapped())
      return res.status(400).json(infoApiError)
   } 
   
   else {
      let { password, email } = req.body

      // cari user dari bedasarkan email 
      const user =  await usersModels.findOne({
         where: {
            email: email
         }
      })

      // jika user tidak ditemukan
      if (user == null ) {
         let infoApiError = ErrorApi(404, false, "Email Tidak Ditemukan !")
         return res.status(404).json(infoApiError)
      }
   
      else {
         /* kita compare password yang ada. 
          di db dengan password yang di input users  */
         
         try {
            const matchPassword = bcrypt.compareSync(password.trim(), user.password)

            
            if (matchPassword === true) {
               
               let infoApiSuccess = SuccessAPi(200, true, "Berhasil Login")
               return res.status(200).json(infoApiSuccess)
            } else {

               let infoApiError = SuccessAPi(403, false, "Password Salah !")
               return res.status(403).json(infoApiError)
            }

         } catch (error) {
            let infoApiError = ErrorApi(500, false, "Internal Server Error")
            return res.status(500).json(infoApiError)
         }
         
      }
   }

}

export default loginController
