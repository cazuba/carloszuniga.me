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
          social {
            icon
            title
            url
          }
          email
          emailDisplay
          phone
          phoneDisplay
          location
          locationDisplay
        }
      }
    }
  `)
  const {
    email,
    emailDisplay,
    phone,
    phoneDisplay,
    location,
    locationDisplay,
    social
  } = data.site.siteMetadata

  return (
    <>
      <Col xs={12} className="d-flex flex-column align-items-start mt-2 mb-4">
        <TextLink
          to={show.email ? email : '#/'}
          className="d-flex"
          rel="author"
          onClick={event => {
            if (!show.email) {
              event.preventDefault()
              window.gtag("event", "click", { event_name: 'contact', contact_via: 'email' })
              setShow(prevState => ({ ...prevState, email: true }))
            }
          }}
        >
          <Icon name="envelope" className="me-3" />
          {show.email ? emailDisplay : 'Email me'}
        </TextLink>

        <TextLink
          to={show.phone ? `tel:${phone}` : '#/'}
          className="d-flex"
          rel="noopener noreferrer"
          onClick={event => {
            if (!show.phone) {
              event.preventDefault()
              window.gtag("event", "click", { event_name: 'contact', contact_via: 'celphone' })
              setShow(prevState => ({ ...prevState, phone: true }))
            }
          }}
        >
          <Icon name="phone-alt" className="me-3" />
          {show.phone ? phoneDisplay : 'Call me'}
        </TextLink>

        <TextLink
          to={location}
          rel="noopener noreferrer"
          target="_blank"
          onClick={() => window.gtag("event", "click", { event_name: 'contact', contact_via: 'location' })}
        >
          <Icon name="map-marker-alt" className="me-3" />
          {locationDisplay}
        </TextLink>
      </Col>
      <Col xs={12} className="d-flex align-items-space-between">
        {social && social.map(({ icon, title, url }) => (
          <TextLink
            key={icon}
            to={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name={icon} title={title} className="me-3" />
          </TextLink>
        ))}
      </Col>
    </>
  )
})

SocialNetworks.propTypes = {}

export default SocialNetworks
