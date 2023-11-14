import ListingCard from "@/components/listingCard/listingCard";
import styles from "./styles.module.css"
import {ReactNode} from 'react'
import Anuncio from "@/interface/interface";

const getAnuncios = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/anuncios');
        if(!res.ok){
            throw new Error("falha em buscar anuncios ok")
        }
        const x = await res.json()
        console.log({anuncios: x.anuncios})
        return x
    } catch(error) {
        console.log("erro em carregar", error)
    }
}

export default async function ListResult(props: {origem: String}) {

    const {anuncios} = await getAnuncios();
    const anunciosR = anuncios.filter((anuncio: Anuncio) => anuncio.origem == "OLX")
    return anuncios.length > 0 && (

        <div className={styles.List}>
            <h2 className={styles.Origin}>Resultados OLX {anunciosR.length}</h2>
            {anunciosR.map((t:Anuncio, i: number) => (
                <ListingCard anuncio={t} key={i}/>
                ))}
            <a className={styles.More}>Mostrar mais</a>
        </div>
    )
}