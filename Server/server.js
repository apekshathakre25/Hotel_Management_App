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
app.use(clerkMiddleware())


app.use("/api/clerk", express.raw({ type: 'application/json' }), clerkWebHooks)


app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Server is running 🚀")
})

// Test endpoint to check database connection and user creation
app.get("/test-db", async (req, res) => {
    try {
        const User = (await import('./models/User.js')).default
        const userCount = await User.countDocuments()
        const testUser = {
            _id: 'test-user-' + Date.now(),
            email: 'test@example.com',
            username: 'Test User',
            image: 'https://example.com/image.jpg'
        }
        const newUser = await User.create(testUser)
        await User.findByIdAndDelete(newUser._id) // Clean up
        res.json({ 
            success: true, 
            message: 'Database connection working', 
            userCount,
            testUserCreated: true 
        })
    } catch (error) {
        res.json({ 
            success: false, 
            message: 'Database error: ' + error.message 
        })
    }
})

// Debug endpoint to check users in database
app.get("/debug-users", async (req, res) => {
    try {
        const User = (await import('./models/User.js')).default
        const users = await User.find({}).limit(10)
        const userCount = await User.countDocuments()
        res.json({ 
            success: true, 
            userCount,
            users 
        })
    } catch (error) {
        res.json({ 
            success: false, 
            message: 'Database error: ' + error.message 
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
});

