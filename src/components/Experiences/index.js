import React, { memo } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// components
import Section from '@components/Section'

const Experiences = memo(() => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "programming.png" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 400) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `)
  return (
    <Section>
      <Row>
        <Col xs={12} sm={6}>
          Education
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Degree</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>MTB</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          Work Experience
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Degree</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>MTB</Card.Title>
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

export default Experiences
