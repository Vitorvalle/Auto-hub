import React from "react"
import ListingsWrapper from "@/components/listingsWrapper/wrapper"



export default async function Result() {
    const getAnuncios = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/anuncios', {cache: 'no-store'});
            if(!res.ok){
                throw new Error("falha em buscar anuncios ok")
            }
            const x = await res.json()
            return x
        } catch(error) {
            console.log("erro em carregar", error)
        }
    }
    const {anuncios} = await getAnuncios() || undefined || {};
    return(
        <>

            <ListingsWrapper anuncios={anuncios}/>
        </>
    )
}
