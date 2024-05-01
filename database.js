import mysql from "mysql2"


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "express_nodejs_api"
})

connection.connect((error)=> {
    if (error) throw error
    console.log("database running")
})

export default connection
