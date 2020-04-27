import React, { memo } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import Section from '@components/Section'

// styles
import styles from './_.module.scss'
import clsx from 'clsx'

const Home = memo(() => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Section margin={5}>
      <Row className="py-5 mb-4">
        <Col xs={12} sm={6} className={styles.profilePicture}>
          <div className={clsx('rounded-circle', 'pb-', styles.imageContainer)}>
            <Img
              className="rounded-circle"
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </div>
        </Col>
        <Col xs={12} sm={6} className={styles.presentationCard}>
          Presentation Card
        </Col>
      </Row>
    </Section>
  )
})

export default Home
