import User from "../models/User.js"
import { Webhook } from "svix"

const clerkWebHooks = async (req, res) => {
    try {
        const Whook = new Webhook(process.env.SIGNIN_SECRET)

        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        }

        // Check if required headers are present
        if (!headers["svix-id"] || !headers["svix-timestamp"] || !headers["svix-signature"]) {
            console.log('Missing required headers:', headers)
            return res.status(400).json({ success: false, message: "Missing required headers" })
        }

        // Verify the webhook with raw body
        const payload = req.body
        const evt = Whook.verify(payload, headers)

        const { data, type } = evt

        console.log('Webhook event type:', type)
        console.log('User data:', data)

        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username: data.first_name + " " + data.last_name,
            image: data.image_url,
        }

        switch (type) {
            case "user.created": {
                console.log('Creating new user:', userData)
                const newUser = await User.create(userData)
                console.log('User created successfully:', newUser)
                break;
            }
            case "user.updated": {
                console.log('Updating user:', userData)
                await User.findByIdAndUpdate(data.id, userData)
                break;
            }
            case "user.deleted": {
                console.log('Deleting user:', data.id)
                await User.findByIdAndDelete(data.id)
                break;
            }
            default:
                console.log('Unhandled webhook type:', type)
                break;
        }
        res.json({ success: true, message: "Webhook Received" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }

}

export default clerkWebHooks;


