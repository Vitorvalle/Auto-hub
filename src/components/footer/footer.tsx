import React from 'react'
import styles from './styles.module.css'


export default function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.footer2}>
                <text className={styles.disclaimer}>Aviso legal: O AutoHub não é afiliado ao MercadoLivre, OLX, ou WebMotors, que são direitos autorais de seus respectivos donos.<br />
                Esse é um produto em desenvolvimento, features, telas, funções e requisitos podem mudar ou não funcionar</text>
            </div>
        </div>
    )
}