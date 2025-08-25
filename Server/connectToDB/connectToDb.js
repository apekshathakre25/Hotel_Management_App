import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("mongodb Connected succesfully"))
        await mongoose.connect(`${process.env.MONGO_URI}/hotel-management`)
    } catch (error) {
        console.log(error.message)

    }

}

export default connectToDb;