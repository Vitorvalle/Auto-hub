import styles from "./styles.module.css"

export default function About() {
    return(
        <div className={styles.about}>
            <h1 className={styles.h1}>O que é a AutoHub</h1>
            <h3>O AutoHub agrega em um único lugar os anúncios de veículos das principais
                plataformas de venda de automóveis, novos e seminovos, em todo território brasileiro.
                Facilitando a sua busca pelo seu carro ideal.</h3>
        </div>
    )
}