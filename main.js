import express from "express"
import bodyParser from "body-parser"
import "dotenv/config"
import routes from "./routes.js"

const app = express()
app.use(bodyParser.json())


const port = process.env.port 

// ROUTE 
app.use(routes)




// serer development setup
app.listen(port, (error) => {
   if (error) throw error

   console.log(
      "Servers s running at http://localhost:" + port
   )
})
