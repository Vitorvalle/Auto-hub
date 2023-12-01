import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema(
    {
        nome: String,
        email: String,
        senha: String
    },
    {
        timestamps: true,
    }
)

const Usuario = mongoose.models.Usuario || mongoose.model("Usuario", usuarioSchema);

export default Usuario;