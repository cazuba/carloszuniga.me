import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { string } from 'prop-types'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
export const GATSBY_ASTRONAUT = 'gastbyAtronaut'
export const LANDSCAPE = 'landscape'
// const IMAGES = {
//   [GATSBY_ASTRONAUT]: () => graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `,
//   [LANDSCAPE]: () => graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "landscape.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 800) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `
// }

const Image = ({ name }) => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

Image.propTypes = {
  name: string
}

Image.defaultProps = {
  name: GATSBY_ASTRONAUT
}

export default Image
