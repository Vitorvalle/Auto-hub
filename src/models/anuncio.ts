import mongoose, { Schema } from "mongoose";

const AnuncioSchema = new Schema(
    {
        id: String,
        veiculo: String,
        url: String,
        price: Number,
        local: String,
        km: Number,
        ano: Number, 
        veiculoImg: String,
        origem: String
    }
);

const Anuncio = mongoose.models.veiculos || mongoose.model("veiculos", AnuncioSchema)
export default Anuncio;