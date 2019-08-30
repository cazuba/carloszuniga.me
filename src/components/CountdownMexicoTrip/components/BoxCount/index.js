import React from 'react'
import { string } from 'prop-types'
import clsx from 'clsx'

// styles
import styles from './_.module.scss'

const BoxCount = ({ counter, label }) => (
  <div
    className={clsx('di-f', 'fldi-c', 'alit-c', 'juco-c', 'teal-c', styles.box)}
  >
    <div className={styles.number}>{counter}</div>
    <div className={styles.text}>{label}</div>
  </div>
)
BoxCount.propTypes = {
  counter: string.isRequired,
  label: string.isRequired
}
export default BoxCount
