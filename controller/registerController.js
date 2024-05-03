import bcrypt from "bcryptjs"
import usersModels from '../models/usersModels.js'

const registerController = async (req, res) => {
   const { username, password } = req.body

   // cek jika field username / password kosong 
   let checkUsername = username.length
   let checkPassword = password.length

   if (checkUsername == 0 | checkPassword == 0) {
      return res.json({
         statusCode: 400,
         success: false,
         messages: "Masukan Data Dengan Valid !"
      })
   } else {

      // hash password dari field password 
      const salt = bcrypt.genSaltSync(10)
      const hashPassword = bcrypt.hashSync(password, salt)

      try {

         // kirim data ke database 
         await usersModels.create({
            username: `'${username}'`,
            password: `'${hashPassword}'`
         })

         res.json({
            statusCode: 201,
            success: true,
            messages: "Berhasil Membuat User !"

         })

      } catch (error) {
         console.log({ errorRegister: error})
         res.json({
            statusCode: 400,
            success: false,
            messages: "Gagal Membuat User, silakan coba lagi"
         })
      }
   }
}

export default registerController
