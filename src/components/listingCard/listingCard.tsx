
import Image from 'next/image'
import styles from './styles.module.css'
import imageWagon from '../../images/wagonimage.jpg'
import { FaLocationDot } from 'react-icons/fa6'
import { BsSpeedometer2, BsCalendar4 } from 'react-icons/bs'
import Anuncio from '@/interface/interface'

export default function ListingCard(props:{anuncio: Anuncio}) {
    return (
        <div className={styles.Card}>
            <div><Image src={imageWagon} alt='aeea' className={styles.Image}/></div>
            <div className={styles.Info}>
                <h2 className={styles.Name}> {props.anuncio.veiculo} </h2>
                <h3 className={styles.Price}> {"R$ " + props.anuncio.price} </h3>
                <div className={styles.subInfo}>
                    <h4 className={styles.KM}><BsSpeedometer2/> 2409 Km</h4>
                    <h4 className={styles.Year}><BsCalendar4/> 2021</h4>
                </div>
                <h3 className={styles.Location}> <FaLocationDot/> {props.anuncio.local}</h3>
            </div>
        </div>
    )
}