import React from "react"
import styles from "./styles.module.css"
import Filter from "@/containers/filters/filter"
import ListResult from "@/containers/ListResults/listResult"
import { useParams, useRouter } from "next/navigation"



export default async function Result({searchParams}:{
    searchParams: {modelo: string}
}) {
    const getAnuncios = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/anuncios');
            if(!res.ok){
                throw new Error("falha em buscar anuncios ok")
            }
            const x = await res.json()
            console.log (x)
            return x
        } catch(error) {
            console.log("erro em carregar", error)
        }
    }
    const {anuncios} = await getAnuncios();
    return(
        <div className={styles.page}>
            <Filter/>
            <div className={styles.result}>
                <h1>{searchParams.modelo}</h1>
                <h2 className={styles.NumberResults}>Resultados</h2>
                <ListResult origem={"OLX"} anuncios={anuncios}/>
                <ListResult origem={"ML"} anuncios={anuncios}/>
            </div>
        </div>
    )
}