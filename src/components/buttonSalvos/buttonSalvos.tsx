'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaRegHeart } from "react-icons/fa"
import styles from './styles.module.css'


export default function ButtonSalvos(props: {url: string}) {
    const router = useRouter()
    const handleClick = () => {
        router.push('/salvos?query=' + props.url)
    }
    return (
        <a onClick={handleClick} className={styles.salvosButton}><FaRegHeart/>Anuncios Salvos</a>
    )
}