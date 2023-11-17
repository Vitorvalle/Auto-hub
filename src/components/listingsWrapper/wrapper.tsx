"use client"
import Filter from "@/containers/filters/filter";
import ListResult from "@/containers/ListResults/listResult";
import styles from "../../app/result/styles.module.css"
import Anuncio from "@/interface/interface";
import { useState } from "react";

export default function ListingsWrapper(props: { anuncios: Anuncio[] }) {
    const [modelo, setModelo] = useState("")

    return(
            <div className={styles.page}>
            <Filter modelo={modelo} changeFn={setModelo} />
            <div className={styles.result}>
            <h2 className={styles.NumberResults}>Resultados</h2>
            <ListResult origem={"OLX"} anuncios={props.anuncios} modeloFilt={modelo} />
            <ListResult origem={"ML"} anuncios={props.anuncios} modeloFilt={modelo}/>
            </div>
            </div>
          )
}
