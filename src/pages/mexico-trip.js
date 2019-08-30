import React from 'react'

// components
import LayoutMexicoTrip from '@components/LayoutMexicoTrip'
import SEO from '@components/Seo'
import CountdownMexicoTrip from '@components/CountdownMexicoTrip'

const MexicoTripPage = () => {
  return (
    <LayoutMexicoTrip>
      <SEO
        title="Mexico Trip | Coundown"
        description="Mexico trip is comming..."
      />
      <CountdownMexicoTrip />
    </LayoutMexicoTrip>
  )
}

export default MexicoTripPage
