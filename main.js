import express from "express"
import bodyParser from "body-parser"
import "dotenv/config"
import indexRoutes from './routes/index.js'

const app = express()
app.use(bodyParser.json())

// ROUTE 
app.use("/api/v1", indexRoutes)


// serer development setup
app.listen(process.env.port, (error) => {
   if (error) throw error

   console.log(
      "Servers s running at http://localhost:" + process.env.port
   )
})
