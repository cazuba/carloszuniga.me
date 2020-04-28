import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// components
import Layout from '@components/Layout'
import SEO from '@components/Seo'
import Profile from '@compositions/Profile'
import { any } from 'prop-types'

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout location={location}>
      <SEO title={data.site.siteMetadata.title} />
      <Profile />
    </Layout>
  )
}

IndexPage.propTypes = {
  location: any
}
IndexPage.defaultProps = {
  location: {}
}

export default IndexPage
