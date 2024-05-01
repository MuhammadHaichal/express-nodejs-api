import connection from "../database.js"


const allUserController = (req, res) => {
    try {
        const sql = "SELECT * FROM users"
        connection.query(sql, (error, result) => {
            if (error) return console, log(error)

            res.json({
                statusCode: 200,
                success: true,
                messages: "getting all users",
                data: result
            })
        })
    } catch (error) {
        res.json({
            statusCode: 401,
            success: false,
            error: error
        })
    }
}

export default allUserController
