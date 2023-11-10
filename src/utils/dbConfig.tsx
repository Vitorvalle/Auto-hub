import mongoose from "mongoose";
let uri = process.env.MONGODB_URI || ""

const connectDb = async () => {
    try {
        console.log ("paunocuentrando")
        await mongoose.connect("mongodb://127.0.0.1:27017/autohub")
        console.log("Sucesso na conexão")
    } catch (error) {
        console.log("paunocu")
    }
}

export default connectDb