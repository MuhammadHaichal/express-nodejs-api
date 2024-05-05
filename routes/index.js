import express from "express"

import authRoutes from "./auth-routes.js"

const app = express()

const indexRoutes = [
   app.use("/users", authRoutes)
]

export default indexRoutes
