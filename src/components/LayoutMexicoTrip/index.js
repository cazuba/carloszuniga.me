import React from 'react'
import { node } from 'prop-types'
import clsx from 'clsx'

import BackgroundGallery from './components/BackgroundGallery'

// styles
import styles from './_.module.scss'
const LayoutMexicoTrip = ({ children }) => (
  <div className={clsx('po-r',  styles.mexicoFlag)}>
    <BackgroundGallery />
    <main className="po-r">{children}</main>
  </div>
)

LayoutMexicoTrip.propTypes = {
  children: node.isRequired
}

export default LayoutMexicoTrip
