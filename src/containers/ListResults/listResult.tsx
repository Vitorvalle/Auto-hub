import styles from "./styles.module.css"
import {ReactNode} from 'react'

export default function ListResult(props: {children: ReactNode}) {
    return(
        <div className={styles.List}>
            <h2 className={styles.Origin}>Resultados OLX</h2>
            {props.children}
            <a className={styles.More}>Mostrar mais</a>
        </div>
    )
}