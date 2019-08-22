/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

// components
import Header from '@components/Header'

const Layout = ({ children }) => (
  <>
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0
      }}
    >
      <main>{children}</main>
      <footer className="di-f pat-2 juco-c alit-c">
        © {new Date().getFullYear()}, Built with
        <a className="pal-1" target="blank" href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
