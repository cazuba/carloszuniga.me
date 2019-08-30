import React from 'react'
import { node } from 'prop-types'

import BackgroundGallery from './components/BackgroundGallery'

const LayoutMexicoTrip = ({ children }) => (
  <div
    className="po-r"
    style={{
      margin: `0 auto`,
      maxWidth: 400,
      padding: `0px 1.0875rem 1.45rem`,
      paddingTop: 0
    }}
  >
      <BackgroundGallery />
    <main className="po-r">{children}</main>
  </div>
)

LayoutMexicoTrip.propTypes = {
  children: node.isRequired
}

export default LayoutMexicoTrip
