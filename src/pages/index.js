import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// components
import Layout from '@components/Layout'
import SEO from '@components/Seo'
import PresentationCard from '@components/PresentationCard'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          role
          hashtags
          github
          linkedin
          email
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <PresentationCard
        siteName={data.site.siteMetadata.title}
        role={data.site.siteMetadata.role}
        hashtags={data.site.siteMetadata.hashtags}
        github={data.site.siteMetadata.github}
        linkedin={data.site.siteMetadata.linkedin}
        email={data.site.siteMetadata.email}
      />
    </Layout>
  )
}

export default IndexPage
