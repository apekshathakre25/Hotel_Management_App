import express from "express"
import "dotenv/config"
import cors from "cors"
import connectToDb from "./connectToDB/connectToDb.js"
import { clerkMiddleware } from '@clerk/express'
import clerkWebHooks from "./controllers/clerkWebhooks.js"

connectToDb()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.use("/api/clerk", clerkWebHooks)

app.get("/", (req, res) => {
    res.status(200).send("Server is running 🚀")
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
});

