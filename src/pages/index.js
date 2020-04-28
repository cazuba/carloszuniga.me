import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// components
import Layout from '@components/Layout'
import SEO from '@components/Seo'
import Profile from '@compositions/Profile'
import { any } from 'prop-types'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Profile />
  </Layout>
)

IndexPage.propTypes = {
  location: any
}
IndexPage.defaultProps = {
  location: {}
}

export default IndexPage
