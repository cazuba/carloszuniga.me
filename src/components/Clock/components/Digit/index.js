import React, { memo } from 'react'
import randomColor from 'randomcolor'

import Segment from '../Segment'

import styles from './_.module.scss'

const Digit = memo(({ data }) => {
  const colors = randomColor({ count: 15 })

  const segments = data.map((active, index) => {
    const color = colors[index]
    return {
      active: active,
      color: color
    }
  })

  return (
    <div className={styles.digit}>
      {segments.map((segment, index) => (
        <Segment key={`segment-${index}`} {...segment} />
      ))}
    </div>
  )
})

export default Digit
