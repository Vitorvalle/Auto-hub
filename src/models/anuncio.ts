import mongoose, { Schema } from "mongoose";

const AnuncioSchema = new Schema(
    {
        veiculo: String,
        url: String,
        price: Number,
        local: String,
        km: Number,
        ano: Number, 
        veiculoImg: String,
        origem: String
    }
)



export default mongoose.model("veiculos", AnuncioSchema)