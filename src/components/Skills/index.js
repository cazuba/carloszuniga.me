import React, { memo } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import { GatsbyImage } from 'gatsby-plugin-image'
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
    <Section id="skills">
      <Row>
        <Col xs={12} sm={6}>
          <h4 className="pb-4">Technical Skills</h4>
          <ul>
            <li>Javascript</li>
            <li>PHP</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>AWS</li>
          </ul>
        </Col>
        <Col xs={12} sm={6}>
          <h4 className="pb-4">Professional Skills</h4>
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
