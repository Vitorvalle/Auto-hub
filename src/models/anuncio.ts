import mongoose, { Schema } from "mongoose";

const AnuncioSchema = new Schema(
    {
        veiculo: String,
        url: String,
        price: Number,
        local: String, 
        veiculoImg: String,
        origem: String
    }
)

const Anuncio = mongoose.model("veiculos", AnuncioSchema)

export default Anuncio