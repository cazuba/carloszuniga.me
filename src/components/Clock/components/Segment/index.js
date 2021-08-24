import React, { memo } from 'react'
import { number, string } from 'prop-types'

import styles from './_.module.scss'

const Segment = memo(({ active, color }) => {
  const style = {
    backgroundColor: active ? color : 'transparent'
  }

  return <div className={styles.segment} style={style} />
})

Segment.propTypes = {
  active: number.isRequired,
  color: string.isRequired
}

export default Segment
