export type Anuncio = {
        veiculo: String,
        url: String,
        price: Number,
        local: String, 
        ano: Number,
        km: Number,
        veiculoImg: String,
        origem: String
}

export type Usuario = {
        nome: String,
        email: String,
        senha: String,
        createdDate: Date,
        salvos: [String]
}

