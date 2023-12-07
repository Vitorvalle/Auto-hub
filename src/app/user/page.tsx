
import welcome from '../../images/tipos-de-carros-capa.png';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next'
import styles from "./styles.module.css";
import Image from "next/image";
import { redirect } from 'next/navigation';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import SignOut from '@/components/modal/modal';
import ButtonSalvos from '@/components/buttonSalvos/buttonSalvos';

export default async function User() {
    const session = await getServerSession(options)
    if(!session) {
        redirect('/api/auth/singin?callbackUrl=/user')
    }


    const userSession = JSON.stringify(session.user, null, 2)
    const user = JSON.parse(userSession)
    const salvos = user.salvos
    let query = {
        salvo1: salvos[0],
        salvo2: salvos[1],
        salvo3: salvos[2],
        salvo4: salvos[3],
        salvo5: salvos[4],
        salvo6: salvos[5],
        salvo7: salvos[6],
        salvo8: salvos[7]
    }
    console.log(query)
    const url = JSON.stringify(query)

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
                           <ButtonSalvos url={url}/>
                            <SignOut/>
                        </div>
                        <div className={styles.userCard}>
                            <h2 className={styles.title}>Dados Pessoais</h2>
                            <a className={styles.userInfo}>Nome: {session.user?.name}</a>
                            <a className={styles.userInfo}>Email: {session.user?.email}</a>
                        </div>
                    </div>
                ) : (
                    <h1>Acesso negado</h1>
                )}
            </body>
        </div>
    )
}