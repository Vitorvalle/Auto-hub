import Image from 'next/image';
import welcome from '../../images/tipos-de-carros-capa.png';
import styles from './styles.module.css'

export default function WelcomeImage() {
    return (
        <div className='WelcomeCard'>
            <Image
            className={styles.WelcomeImage}
            src={welcome}
            alt='Cartão de visita'
            width={2000}
            height={20}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill={false}
        />
        </div>
    )
}