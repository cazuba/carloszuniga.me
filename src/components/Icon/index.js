import React, { memo } from 'react'
import { string } from 'prop-types'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faLinkedinIn,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs
} from '@fortawesome/free-brands-svg-icons'
import {
  faBiking,
  faCode,
  faEnvelope,
  faHome,
  faMapMarkerAlt,
  faPhoneAlt,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons'

library.add(
  // Brands
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faLinkedinIn,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
  // Solid
  faBiking,
  faCode,
  faEnvelope,
  faHome,
  faMapMarkerAlt,
  faPhoneAlt,
  faSun,
  faMoon
)
const brands = [
  'aws',
  'facebook',
  'github',
  'html5',
  'linkedin-in',
  'js',
  'node',
  'php',
  'react',
  'twitter',
  'vuejs'
]
const Icon = memo(({ name, title, className }) => {
  const isBrand = brands.indexOf(name) !== -1
  return (
    <div className={clsx('icon', className)} title={title}>
      <FontAwesomeIcon icon={[isBrand ? 'fab' : 'fas', name]} />
    </div>
  )
})

Icon.propTypes = {
  name: string.isRequired,
  title: string,
  className: string
}
Icon.defaultProps = {
  title: '',
  className: ''
}

export default Icon
