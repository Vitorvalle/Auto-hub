import imageCoupe from "../../images/Coupes.jpg"
import imageHatch from '../../images/Hatches.jpg'
import imageSedan from '../../images/Sedans.jpg'
import imageWagon from '../../images/Peruas.jpg'
import imagePickup from '../../images/Picapes.jpg'
import imageSuv from '../../images/Suv.jpg'
import imageZero from '../../images/Zero.jpg'
export const images = [imageCoupe, imageHatch, imageSedan, imageWagon, imagePickup, imageSuv, imageZero]

const imageByIndex = (index: number) => images[index % images.length]

export default imageByIndex
