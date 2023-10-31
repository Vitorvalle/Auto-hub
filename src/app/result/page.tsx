'use client'

import React from "react"
import styles from "./styles.module.css"
import Filter from "@/containers/filters/filter"

export default function Result() {
    return(
        <div className={styles.result}>
            <Filter/>
        </div>
    )
}