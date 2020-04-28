import React, { memo } from 'react'
import { any, string, number } from 'prop-types'
import clsx from 'clsx'
import Container from 'react-bootstrap/Container'

const Section = memo(({ id, as, padding, margin, children }) => {
  return (
    <Container
      id={id}
      as={as}
      className={clsx(`py-${padding}`, `my-${margin}`)}
    >
      {children}
    </Container>
  )
})

Section.propTypes = {
  id: string,
  as: string,
  padding: number,
  margin: number,
  children: any
}

Section.defaultProps = {
  as: 'section',
  id: null,
  padding: 5,
  margin: 3,
  children: null
}

export default Section
