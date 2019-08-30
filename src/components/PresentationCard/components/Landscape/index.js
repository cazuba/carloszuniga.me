import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Landscape = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "landscape.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Landscape
