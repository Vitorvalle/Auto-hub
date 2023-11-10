import ListingCard from "@/components/listingCard/listingCard";
import styles from "./styles.module.css"
import {ReactNode} from 'react'
import Anuncio from "@/interface/interface";

const getAnuncios = async () => {
    try {
        const res = await fetch ('http://localhost:3000/api/anuncios');
        if(!res.ok){
            throw new Error("falha em buscar anuncios")
        }
        return res.json().then( (aa) => aa).catch( (ee) => {throw new Error("falha em buscar anuncios")})
    } catch(error) {
        console.log("erro em carregar", error)
    }
}

export default async function ListResult(props: {origem: String}) {

    const {anuncios} = await getAnuncios();

    return(
        <div className={styles.List}>
            <h2 className={styles.Origin}>Resultados OLX</h2>
            {anuncios.map((t:Anuncio) => (
                <ListingCard anuncio={t}/>))}
            <a className={styles.More}>Mostrar mais</a>
        </div>
    )
}