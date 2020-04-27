import React, { memo, useContext } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// context
import { ThemeContext } from '@context/ThemeContext'

// components
import Section from '@components/Section'

const Contact = memo(() => {
  const { theme } = useContext(ThemeContext)
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "programming.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 400) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <Section>
      <Row className="mt-4">
        <Col xs={12}>Contact</Col>
        <Col>
          <Card bg={theme}>
            <Card.Body>
              <Card.Title>Address</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg={theme}>
            <Card.Body>
              <Card.Title>Email</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg={theme}>
            <Card.Body>
              <Card.Title>Phone</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Section>
  )
})

export default Contact
