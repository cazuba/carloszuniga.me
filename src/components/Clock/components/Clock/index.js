import React, { memo } from 'react'
import { number } from 'prop-types'

import DigitsGroup from '../DigitsGroup'

import styles from './_.module.scss'

const Clock = memo(({ days, hours, minutes, seconds }) => {
  console.log({ days })
  return (
    <div className={styles.clockContainer}>
      {/* <div className={styles.clock} style={{ marginBottom: '20px' }}>
        <span className={styles.days}>DIAS</span>
      </div> */}
      <div className={styles.clock}>
        <DigitsGroup groupName="days" data={days} padLeft={3} />
        <DigitsGroup groupName="semicolon-0" data=":" hasZeroFill={false} />
        <DigitsGroup groupName="hours" data={hours} />
        <DigitsGroup groupName="semicolon-1" data=":" hasZeroFill={false} />
        <DigitsGroup groupName="minutes" data={minutes} />
        <DigitsGroup groupName="semicolon-2" data=":" hasZeroFill={false} />
        <DigitsGroup groupName="seconds" data={seconds} />
      </div>
    </div>
  )
})

Clock.propTypes = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}

Clock.defaultProps = {
  days: new Date().getDate(),
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  seconds: new Date().getSeconds()
}

export default Clock
