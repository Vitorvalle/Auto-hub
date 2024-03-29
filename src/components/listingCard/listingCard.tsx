import React from "react"
import {Image} from "@nextui-org/react"
import styles from './styles.module.css'
import { FaLocationDot } from 'react-icons/fa6'
import { BsSpeedometer2, BsCalendar4 } from 'react-icons/bs'
import {Anuncio} from '@/interface/interface'

export default function ListingCard(props:{anuncio: Anuncio}) {
    const image:string =  props.anuncio.veiculoImg + ""
    return (
        <a href={props.anuncio.url + ""}>
        <div className={styles.Card}>
            <div><Image src={image} alt='aeea' className={styles.Image}/></div>
            <div className={styles.Info}>
                <h2 className={styles.Name}> {props.anuncio.veiculo} </h2>
                <h3 className={styles.Price}> {"R$ " + props.anuncio.price} </h3>
                <div className={styles.subInfo}>
                    <h4 className={styles.KM}><BsSpeedometer2/> {props.anuncio.km + " Km"} </h4>
                    <h4 className={styles.Year}><BsCalendar4/> {props.anuncio.ano + ''}</h4>
                </div>
                <h3 className={styles.Location}> <FaLocationDot/> {props.anuncio.local}</h3>
            </div>
        </div>
        </a>
    )
}
