import React from 'react'
// import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

// components
import CancunImages, { CANCUN_1, CANCUN_2, CANCUN_3 } from './components/CancunImages'

// styles
import styles from './_.module.scss'

// let tmrBg = null
const BackgroundGallery = () => {
  const images = [CANCUN_1, CANCUN_2, CANCUN_3]
  const imgName = images[2]
  // const [current, setCurrent] = useState(0)
  // const [imgName, setImgName] = useState(CANCUN_1)
  // useEffect(() => {
  //   tmrBg = setInterval(() => {
  //     const nextImg = current === images.length - 1 ? 0 : current + 1
  //     setCurrent(nextImg)
  //     setImgName(images[nextImg])
  //   }, 1000 * 5)
  //   return () => clearInterval(tmrBg)
  // })
  return (
    <div className={clsx('po-f', styles.gallery)}>
      <div className={clsx('po-a', styles.overlay)} />
      <CancunImages name={imgName} />
    </div>
  )
}

export default BackgroundGallery
