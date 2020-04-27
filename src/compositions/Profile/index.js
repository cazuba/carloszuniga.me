import React, { memo } from 'react'

// components
import Home from '@components/Home'
import About from '@components/About'
import Skills from '@components/Skills'
import Experiences from '@components/Experiences'
import Portafolio from '@components/Portafolio'
import Contact from '@components/Contact'

const Profile = memo(props => {
  return <>
  <Home />
  <About />
  <Skills />
  <Experiences />
  <Portafolio />
  <Contact />
  </>
})

Profile.propTypes = {}

export default Profile
