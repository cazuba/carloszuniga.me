import React from 'react'
import Countdown from 'react-countdown'

import Section from '@components/Section'
import Clock, { Digit, digits } from '@components/Clock'

// Random component
const Completed = () => (
  <div style={{ width: '80vw', height: '50vh', marginTop: '25vh', top: 0 }}>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/qXoZ4jNjZzA"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
)

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completed />
  } else {
    // Render a countdown
    return <Clock days={days} hours={hours} minutes={minutes} seconds={seconds} />
  }
}

const AguinaldoCountDown = () => {
  let decemberFirst = new Date(new Date().getFullYear(), 11, 1)
  // Full month marked as completed
  if (Date.now() > decemberFirst.getTime()) {
    decemberFirst = Date.now()
  }
  return (
    <Section margin={5}>
      <Section marginTop={1}>
        <Countdown date={decemberFirst} renderer={renderer} />
      </Section>
    </Section>
  )
}

AguinaldoCountDown.propTypes = {}

export default AguinaldoCountDown
