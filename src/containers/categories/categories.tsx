import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import imageByIndex from './imageByIndex'
import {Image} from "@nextui-org/react";
import styles from './styles.module.css';
import imageCoupe from "../../images/coupeImage.jpg"
import imageHatch from '../../images/hatchImage.jpg'
import imageSedan from '../../images/sedanImage.jpg'
import imageWagon from '../../images/wagonimage.jpg'


type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const images = [imageCoupe, imageHatch, imageSedan, imageWagon]
const Cat = ["Coupe", "Hatch", "Sedan", "Wagon"]

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          
            <div className={styles.embla__slide}>
              <Image
                className={styles.embla__slide__img}
                src={imageHatch}
                alt="teucu"
              />
              <h1>aaaa</h1>
            </div>

        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
