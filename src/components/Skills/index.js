import React, { memo } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import Section from '@components/Section'

const Skills = memo(() => {
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
      <Row>
        <Col xs={12} sm={6}>
          Technical Skills
          <ul>
            <li>Javascript</li>
            <li>PHP</li>
          </ul>
          <ul>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>AWS</li>
          </ul>
        </Col>
        <Col xs={12} sm={6}>
          Professional Skills
          <ul>
            <li>Communication</li>
            <li>Team Work</li>
            <li>Leadership</li>
            <li>Project Management</li>
            <li>Creativity</li>
          </ul>
        </Col>
      </Row>
    </Section>
  )
})

export default Skills
