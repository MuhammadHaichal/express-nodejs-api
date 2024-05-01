import bcrypt from "bcryptjs"
import connection from "../database.js"

const addUserController = (req, res) => {
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

        // hash password
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, salt)
        
        // kirim data ke database 
        const sql = `INSERT INTO users (username, password) VALUES ('${username}', '${hashPassword}')`
        connection.query(sql, (error) => {
            if (error) {
                return console.log(`insert users error: ${error}`)
            }

            res.json({
                statusCode: 201,
                success: true,
                messages: "Berhasil Membuat User !"

            })

        })
    }
}

export default addUserController
