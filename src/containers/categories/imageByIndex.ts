import imageCoupe from "../../images/coupeImage.jpg"
import imageHatch from '../../images/hatchImage.jpg'
import imageSedan from '../../images/sedanImage.jpg'
import imageWagon from '../../images/wagonimage.jpg'

export const images = [imageCoupe, imageHatch, imageSedan, imageWagon]

const imageByIndex = (index: number) => images[index % images.length]

export default imageByIndex
