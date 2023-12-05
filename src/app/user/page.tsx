
import welcome from '../../images/tipos-de-carros-capa.png';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next'
import styles from "./styles.module.css";
import Image from "next/image";
import { redirect } from 'next/navigation';
import Anuncio from '@/interface/interface';
import ListingCard from '@/components/listingCard/listingCard';

export default async function User() {
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
    console.log(anuncios)
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
                    <div className={styles.List}>
                    <h2 className={styles.Origin}>Resultados</h2>
                    {anunciosSalvos.map((t:Anuncio) =>(
                        <ListingCard anuncio={t} />
                    ))
                    }  
                </div>
                ) : (
                    <h1>Acesso negado</h1>
                )}
            </body>
        </div>
    )
}