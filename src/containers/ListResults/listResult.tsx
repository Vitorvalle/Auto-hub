'use client'
import ListingCard from "@/components/listingCard/listingCard";
import styles from "./styles.module.css"
import Anuncio from "@/interface/interface";
import { useState } from "react";


export default function ListResult(props: {origem: String, anuncios: Anuncio[]}) {

    const anunciosFilt = props.anuncios.filter((anuncio: Anuncio) => anuncio.origem == props.origem)
    const [cont, setcont] = useState(20)
    function aooo() {
        setcont(cont + 20);
    }
    return props.anuncios.length > 0 && (
        
        <div className={styles.List}>
            <h2 className={styles.Origin}>Resultados {props.origem} {anunciosFilt.length}</h2>
            {anunciosFilt.slice(0, cont).map((t:Anuncio, i: number) => (
                <ListingCard anuncio={t} key={i}/>
                ))}
            <a className={styles.More} onClick={aooo}>Mostrar mais</a>
        </div>
    )
}