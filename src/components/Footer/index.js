import React, { memo } from 'react'
import clsx from 'clsx'
import Container from 'react-bootstrap/Container'

// styles
import styles from './_.module.scss'

const Footer = memo(() => {
  return (
    <Container as="footer" className={clsx('py-5', 'text-center', styles.footer)}>
      <span>All rights reserved Carlos Zúñiga @ {new Date().getFullYear()}</span>
    </Container>
  )
})

export default Footer
