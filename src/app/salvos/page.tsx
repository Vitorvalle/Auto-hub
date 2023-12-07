import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next'
import styles from "./styles.module.css";
import { redirect } from 'next/navigation';
import {Anuncio} from '@/interface/interface';
import ListingCard from '@/components/listingCard/listingCard';
import Link from 'next/link';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { FaRegHeart } from 'react-icons/fa';

export default async function Salvos() {
    const getAnunciosSalvos = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/salvos' , {cache: 'no-store'});
            if(!res.ok){
                throw new Error("falha em buscar anuncios ok")
            }
            const x = await res.json()
            return x
        } catch(error) {
            console.log("erro em carregar", error)
        }
    }
    const {anuncios} = await getAnunciosSalvos() || undefined || {};

    const session = await getServerSession(options)

    if(!session) {
        redirect('/api/auth/singin?callbackUrl=/user')
    }

    const anunciosSalvos = anuncios
    return (
        <div>
            <head>
                <meta charSet='utf-8' />
                <title>Pagina Usuario</title>
            </head>
            <body>
                {session ? (
                    <div className={styles.tela}>
                            <div className={styles.sidebar}>
                                <span className={styles.avatar}>N</span>
                                <h2 className={styles.name}>
                                    Nome
                                </h2>
                                <Link  href={'/user'} className={styles.dadosButton}><HiOutlineUserCircle/> Dados Pessoais</Link>
                                <a className={styles.salvosButton}><FaRegHeart/>Anuncios Salvos</a>
                        </div>
                        <div className={styles.List}>
                            <h2 className={styles.title}>Anuncios Salvos</h2>
                            {anunciosSalvos.map((t:Anuncio) =>(
                                <ListingCard anuncio={t} />
                            ))
                            }  
                        </div>
                    </div>
                ) : (
                    <h1>Acesso negado</h1>
                )}
            </body>
        </div>
    )

}