import React, { memo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import clsx from 'clsx'
import { GatsbyImage } from 'gatsby-plugin-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import Section from '@components/Section'
import SocialNetworks from '@components/SocialNetworks'

// styles
import styles from './_.module.scss'

const Home = memo(() => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          aka
          role
        }
      }
      placeholderImage: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  return (
    <Section id="home">
      <Row className="pt-5 mb-4 align-items-center">
        <Col xs={12} sm={6} className={styles.profilePicture}>
          <div className={clsx('rounded-circle', 'pb-', styles.imageContainer)}>
            <GatsbyImage
              className="rounded-circle"
              image={data.placeholderImage.childImageSharp.gatsbyImageData}
            />
          </div>
        </Col>
        <Col xs={12} sm={6} className={styles.presentationCard}>
          <Row>
            <Col xs={12} className="ms-2">
              <span className={clsx('h5', 'mb-4', styles.hello, 'text-white')}>
                Hello I'm
              </span>
            </Col>
            <Col xs={12}>
              <h1 className="font-weight-bold">
                {data.site.siteMetadata.title}{' '}
                {data.site.siteMetadata.aka && (
                  <i>({data.site.siteMetadata.aka})</i>
                )}
              </h1>
              <h4>{data.site.siteMetadata.role}</h4>
            </Col>
            <SocialNetworks />
          </Row>
        </Col>
      </Row>
    </Section>
  )
})

export default Home
