import React from 'react'
import clsx from 'clsx'
import { string } from 'prop-types'

// components
import Landscape from './components/Landscape'
import ProfilePhoto from './components/ProfilePhoto'

// assets
import GithubLogo from '@assets/github-logo.svg'
import LinkedInLogo from '@assets/linkedin-logo.svg'
import EnvelopSquareSolid from '@assets/envelope-square-solid.svg'

// styles
import styles from './_.module.scss'

const PresentationCard = ({
  siteName,
  role,
  hashtags,
  github,
  linkedin,
  email
}) => {
  return (
    <div className="di-f juco-c po-r">
      <div className={clsx('di-f', 'fldi-c', 'juco-c', styles.card)}>
        <Landscape />
        <div className={clsx('po-r', styles.profilePhoto)}>
          <ProfilePhoto />
        </div>
        <div className="di-f fldi-c alit-c">
          <h1>{siteName}</h1>
          <span className="fosi-2">{role}</span>
          <span className="fosi-1">{hashtags}</span>
          <div className="pa-1 di-f">
            <a
              className="icon max-1"
              rel="publisher"
              target="blank"
              href={`https://github.com/${github}`}
            >
              <GithubLogo className="github-logo" />
            </a>
            <a
              className="icon v"
              rel="publisher"
              target="blank"
              href={`https://www.linkedin.com/in/${linkedin}/`}
            >
              <LinkedInLogo />
            </a>
            <a
              className="icon max-1"
              rel="publisher"
              target="blank"
              href={`mailto:${email}`}
            >
              <EnvelopSquareSolid />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

PresentationCard.propTypes = {
  siteName: string,
  role: string,
  hashtags: string,
  github: string,
  linkedin: string,
  email: string
}

PresentationCard.defaultProps = {
  siteName: null,
  role: null,
  hashtags: null,
  github: null,
  linkedin: null,
  email: null
}

export default PresentationCard
