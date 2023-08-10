import React, { useContext } from 'react'
import clsx from 'clsx'
import { string } from 'prop-types'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// context
import { ThemeContext, DARK_MODE } from '@context/ThemeContext'

// components
import Icon from '@components/Icon'

// modules
import { links } from './modules/constants'

// styles
import styles from './_.module.scss'

const Header = ({ hash }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <Navbar
      className={clsx(`${theme}-mode`, styles[`${theme}Nav`])}
      expand="lg"
      variant={theme}
      fixed="top"
    >
      <div className={clsx('container', `${theme}-mode`)}>
        <Navbar.Brand
          href="/#home"
          className={clsx('font-weight-bold', styles.brand)}
          rel="alternate"
        >
          CZ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map(item => (
              <Nav.Link
                className={clsx(
                  'me-4',
                  hash === item.link ? styles.navItemActive : ''
                )}
                key={item.link}
                href={item.link}
              >
                {item.label}
              </Nav.Link>
            ))}
            <Nav.Link
              onClick={event => {
                event.preventDefault()
                toggleTheme()
              }}
            >
              {theme === DARK_MODE ? <Icon name="sun" /> : <Icon name="moon" />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

Header.propTypes = {
  hash: string
}

Header.defaultProps = {
  hash: ''
}

export default Header
