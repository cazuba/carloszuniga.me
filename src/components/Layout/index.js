import React, { useMemo, useContext } from 'react'
import clsx from 'clsx'
import PropTypes, { any } from 'prop-types'
import Container from 'react-bootstrap/Container'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Font-awesome CSS
import 'font-awesome/css/font-awesome.css'
// Custom Global CSS
import '@styles/index.scss'

// context
import { ThemeProvider, ThemeContext } from '@context/ThemeContext'

// components
import Nav from '@components/Nav'
import Footer from '@components/Footer'

const Content = ({ children, location }) => {
  const hash = useMemo(() => location.hash, [location])
  const { theme } = useContext(ThemeContext)
  return (
    <div className={clsx("mt-2", `${theme}-mode`)}>
      <Nav hash={hash} />
      <Container as="main">{children}</Container>
      <Footer />
    </div>
  )
}
Content.propTypes = {
  children: PropTypes.node.isRequired,
  location: any
}

Content.defaultProps = {
  location: { hash: '' }
}

const Layout = props => {
  return (
    <ThemeProvider>
      <Content {...props} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: any
}

Layout.defaultProps = {
  location: { hash: '' }
}

export default Layout
