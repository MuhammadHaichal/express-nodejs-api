import express from "express"
import bodyParser from "body-parser"
import allUserController from "./controller/allUserController.js"
import addUserController from "./controller/addUsersController.js"


const app = express()
const bodyJson = bodyParser.json()
// const bodyUrlEncoded = bodyParser.urlencoded({extended: false})


app.get('/api/v1/users', allUserController)
app.post('/api/v1/addUsers', bodyJson, addUserController )


// serer development setup
app.listen(4000, (error) => {
    if (error) throw error

    console.log(
        "server running at 4000"
    )
})
