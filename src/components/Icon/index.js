import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs
} from '@fortawesome/free-brands-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { string } from 'prop-types'

library.add(
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
  faSun,
  faMoon
)
const brands = [
  'aws',
  'facebook',
  'github',
  'html5',
  'js',
  'node',
  'php',
  'react',
  'twitter',
  'vuejs'
]
const Icon = memo(({ name, title }) => {
  const isBrand = brands.indexOf(name) !== -1
  return (
    <div className="icon" title={title}>
      <FontAwesomeIcon icon={[isBrand ? 'fab' : 'fas', name]} />
    </div>
  )
})

Icon.propTypes = {
  name: string.isRequired,
  title: string
}
Icon.defaultProps = {
  title: ''
}

export default Icon
