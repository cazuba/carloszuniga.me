import React, { memo, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Col from 'react-bootstrap/Col'

// components
import Icon from '@components/Icon'
import TextLink from '@components/TextLink'

const SocialNetworks = memo(() => {
  const [show, setShow] = useState({ email: false, phone: false })
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          role
          github
          linkedin
          twitter
          email
          emailDisplay
          phone
          phoneDisplay
          location
          locationDisplay
        }
      }
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
    <>
      <Col xs={12} className="d-flex flex-column align-items-start mt-2 mb-4">
        <TextLink
          to={show.email ? data.site.siteMetadata.email : '#/'}
          className="d-flex"
          rel="author"
          onClick={event => {
            if (!show.email) {
              event.preventDefault()
              setShow(prevState => ({ ...prevState, email: true }))
            }
          }}
        >
          <Icon name="envelope" className="mr-3" />
          {show.email ? data.site.siteMetadata.emailDisplay : 'Email me'}
        </TextLink>

        <TextLink
          to={show.phone ? `tel:${data.site.siteMetadata.phone}` : '#/'}
          className="d-flex"
          rel="noopener noreferrer"
          onClick={event => {
            if (!show.phone) {
              event.preventDefault()
              setShow(prevState => ({ ...prevState, phone: true }))
            }
          }}
        >
          <Icon name="phone-alt" className="mr-3" />
          {show.phone ? data.site.siteMetadata.phoneDisplay : 'Call me'}
        </TextLink>

        <TextLink
          to={data.site.siteMetadata.location}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon name="map-marker-alt" className="mr-3" />
          {data.site.siteMetadata.locationDisplay}
        </TextLink>
      </Col>
      <Col xs={12} className="d-flex align-items-space-between">
        <TextLink
          to={data.site.siteMetadata.linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon name="linkedin-in" className="mr-3" />
        </TextLink>
        <TextLink
          to={data.site.siteMetadata.twitter}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon name="twitter" className="mr-3" />
        </TextLink>
        <TextLink
          to={data.site.siteMetadata.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon name="github" className="mr-3" />
        </TextLink>
      </Col>
    </>
  )
})

SocialNetworks.propTypes = {}

export default SocialNetworks
