import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { string } from 'prop-types'

export const CANCUN_1 = 'cancun1'
export const CANCUN_2 = 'cancun2'
export const CANCUN_3 = 'cancun3'

const CancunImages = ({ name }) => {
  const data = useStaticQuery(graphql`
    query {
      cancun1: file(relativePath: { eq: "cancun-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cancun2: file(relativePath: { eq: "cancun-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cancun3: file(relativePath: { eq: "cancun-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data[name].childImageSharp.fluid} />
}

CancunImages.propTypes = {
  name: string
}
CancunImages.defaultProps = {
  name: CANCUN_1
}
export default CancunImages
