import React, { useEffect, useState } from 'react';
import clsx from 'clsx'

// styles
import styles from './_.module.scss'

const imgs = [
    'http://blog.mylescars.com/wp-content/uploads/2019/03/2.gif',
    'https://hips.hearstapps.com/mac.h-cdn.co/assets/15/47/1447697696-indadasdasdex.gif',
    'https://media1.tenor.com/images/fb212bddef295a3d64b603cbd1625e6d/tenor.gif?itemid=13711271',
    'https://media.giphy.com/media/5zmVYCGQUGeUdKfwGY/giphy.gif',
    'https://media.tenor.com/images/ce447bd249a0cd93124904fb31bb87e0/tenor.gif',
    'http://blog.mylescars.com/wp-content/uploads/2019/03/6.gif',
    'https://media.tenor.com/images/35d67afd1843234c6bd9b401ed214d07/tenor.gif',
    'https://memeguy.com/photos/images/mrw-girlfriend-isnt-packing-underwear-for-a-weekend-trip-132016.gif',
    'https://media.tenor.com/images/0f71595efe8c97838230c2c732eded82/tenor.gif',
    'https://media.tenor.com/images/38a2a03b031540cd78557a127d98d5d1/tenor.gif',
    'https://media3.giphy.com/media/L4ZZNbDpOCfiX8uYSd/giphy.gif',
    'https://media0.giphy.com/media/3o752jUdKmV3exZNPW/giphy.gif',
    'https://media1.tenor.com/images/660a88f02f834651255f85f23aecd81a/tenor.gif?itemid=15959299',
    'https://i.pinimg.com/originals/83/29/79/832979e81a3cc16cc42973188688f15a.gif'
]
const Packing = () => {
    const [randomImages, setRandomImages] = useState([])
    useEffect(() => {
        const images = []
        for(let i=0; i < 3; i++){
            const randomNum = Math.random() * (imgs.length - 1)
            const randomIndex = Math.ceil(randomNum)
            const img = imgs.splice(randomIndex, 1)
            images.push(img)
        }
        setRandomImages(images)
    }, [])
    return (
        <div>
            {randomImages.map((img, index) => (
                <img key={index} className={clsx(styles.packing, index > 0 ?styles[`packing${index + 1}`] : '')} src={img} alt={`Packing for trip | GIF: ${index + 1}`} />
            ))}
        </div>
    );
};

export default Packing;