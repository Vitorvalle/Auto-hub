

import React from "react"
import styles from "./styles.module.css"
import Filter from "@/containers/filters/filter"
import ListResult from "@/containers/ListResults/listResult"
import ListingCard from "@/components/listingCard/listingCard"

export default function Result() {

    return(
        <div className={styles.page}>
            <Filter/>
            <div className={styles.result}>
                <h2 className={styles.NumberResults}>Resultados</h2>
                <ListResult origem={"OLX"}/>
            </div>
        </div>
    )
}