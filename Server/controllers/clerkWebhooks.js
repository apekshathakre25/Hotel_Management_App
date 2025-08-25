import User from "../models/User.js"
import { Webhook } from "svix"

const clerkWebHooks = async (req, res) => {
    try {
        const Whook = new Webhook(process.env.SIGNIN_SECREAT)

        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        }

        await Whook.verify(JSON.stringify(req.body), headers)

        const { data, type } = req.body

        const userData = {
            _id: data._id,
            email: data.email_addresses[0].email_address,
            username: data.first_name + " " + data.last_name,
            image: data.image_url,
        }

        switch (type) {
            case "user.created": {
                await User.create(userData)
            }
            case "user.updated": {
                await User.findByIdAndUpdate(data._id, userData)
            }
            case "user.deleted": {
                await User.findByIdAndDelete(data._id)
            }
            default:
                break;
        }
        res.json({ success: true, message: "Webhook Received" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }

}

export default clerkWebHooks;


