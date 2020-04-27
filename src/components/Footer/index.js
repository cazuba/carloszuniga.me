import React, { memo } from 'react'
import Container from 'react-bootstrap/Container'

const Footer = memo(() => {
  return (
    <Container as="footer">
      <span>All right reserved Carlos Zúñiga @ {new Date().getFullYear()}</span>
    </Container>
  )
})

export default Footer
