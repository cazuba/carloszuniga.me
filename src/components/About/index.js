import React, { memo, useContext } from 'react'
import clsx from 'clsx'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

// context
import { ThemeContext } from '@context/ThemeContext'

// components
import Section from '@components/Section'
import Icon from '@components/Icon'

// styles
import styles from './_.module.scss'

const About = memo(() => {
  const { theme } = useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          bio
          hashtags
        }
      }
      placeholderImage: file(relativePath: { eq: "programming.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { hashtags, bio } = (data && data.site && data.site.siteMetadata) || {
    bio: '',
    hashtags: []
  }
  return (
    <Section id="about">
      <Row className="py-5 mb-5">
        <Col xs={12} sm={6}>
          <div>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        </Col>
        <Col xs={12} sm={6} className="direction-column">
          <div>
            <h3 className="pb-4">About me</h3>
            <p>{bio}</p>
          </div>
          <div className="my-4">
            {hashtags.map((tag, index) => (
              <Badge
                variant="primary"
                className="py-2 px-3 mx-1 mb-2 "
                key={index}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </Col>
      </Row>
      <Row className="py-5 mt-3 mb-4" id="passion">
        <Col xs={12}>
          <h3 className="text-center pb-4">My passion</h3>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <Card bg={theme} className={styles.passion}>
            <Card.Body>
              <Icon
                className={clsx('text-success', 'mt-2', styles.passionIcon)}
                name="home"
              />
              <Card.Title className={clsx('my-2', styles.passionTitle)}>
                Family
              </Card.Title>
              <Card.Text>
                I love and enjoy having time with my family. My support and the
                first axis of my life.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex">
          <Card bg={theme} className={styles.passion}>
            <Card.Body>
              <Icon
                className={clsx('text-warning', 'mt-2', styles.passionIcon)}
                name="code"
              />
              <Card.Title className={clsx('my-2', styles.passionTitle)}>
                Web Development
              </Card.Title>
              <Card.Text>
                I feel the adrenaline when I code. I spend most of the day
                coding, studying and learning new things, this is something I
                love and it makes me happy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex">
          <Card bg={theme} className={styles.passion}>
            <Card.Body>
              <Icon
                className={clsx(
                  'text-blue',
                  'mt-2',
                  styles.passionIcon,
                  styles.passionMtb
                )}
                name="biking"
              />
              <Card.Title className={clsx('my-2', styles.passionTitle)}>
                MTB
              </Card.Title>
              <Card.Text>
                With MTB I release adrenaline and energy to have more power in
                the week.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Section>
  )
})

export default About
