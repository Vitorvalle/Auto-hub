import mongoose from "mongoose";
let uri = process.env.MONGODB_URI || ""

const connectDb = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/autohub")
        console.log ("entrou")
        console.log("Sucesso na conexão")
        return connection
    } catch (error) {
        console.log("n entrou")
    }
}

export default connectDb