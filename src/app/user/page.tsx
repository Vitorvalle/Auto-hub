import welcome from '../../images/tipos-de-carros-capa.png';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next'
import styles from "./styles.module.css";
import Image from "next/image";
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { HiOutlineUserCircle } from 'react-icons/hi2';

export default async function User() {
    const session = await getServerSession(options)
    if(!session) {
        redirect('/api/auth/singin?callbackUrl=/user')
    }
    console.log(session.user)
    return (
        <div>
            <head>
                <meta charSet='utf-8' />
                <title>Pagina Usuario</title>
            </head>
            <body>
                <div className={styles.imageBox}>
                    <Image
                    className={styles.image}
                    src={welcome}
                    alt='Cartão de visita'
                    width={2000}
                    height={20}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill={false}></Image>
                </div>
                {session ? (
                    <div className={styles.tela}>
                        <div className={styles.sidebar}>
                            <span className={styles.avatar}>N</span>
                            <h2 className={styles.name}>
                                Nome
                            </h2>
                            <a className={styles.dadosButton}><HiOutlineUserCircle/> Dados Pessoais</a>
                            <Link  href={'/salvos'} className={styles.salvosButton}>Anuncios Salvos</Link>
                        </div>
                        <div className={styles.userCard}>
                            <h2 className={styles.title}>Dados Pessoais</h2>
                            <a className={styles.userInfo}>Nome: {session.user?.email}</a>
                            <a className={styles.userInfo}>Email: {session.user?.name}</a>
                            <a className={styles.userInfo}>Usuario desde:  </a>
                        </div>
                    </div>
                ) : (
                    <h1>Acesso negado</h1>
                )}
            </body>
        </div>
    )
}