import React, { useState, useEffect } from 'react'
import { string } from 'prop-types'
import dayjs from 'dayjs'

// components
import Flying from './components/Flying'
import BoxCount from './components/BoxCount'
import clsx from 'clsx';

// styles
import styles from './_.module.scss'

const formatCount = value =>
  Math.max(0, value)
    .toString()
    .padStart(2, '0')

let tmr = null
const CountdownMexicoTrip = ({ fromDate, toDate }) => {
  const date = dayjs(fromDate)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [partyOneMonth, setPartyOneMonth] = useState(false)
  const [partyOneWeek, setPartyOneWeek] = useState(false)
  const [partyThreeDays, setPartyThreeDays] = useState(false)
  const [partyTwoDays, setPartyTwoDays] = useState(false)
  const [partyOneDay, setPartyOneDay] = useState(false)
  const [partyThreeHours, setPartyThreeHours] = useState(false)
  const [partyTwoHours, setPartyTwoHours] = useState(false)
  const [partyOneHour, setPartyOneHour] = useState(false)
  const [partyTenMinutes, setPartyTenMinutes] = useState(false)
  const [partyIsOn, setPartyIsOn] = useState(false)
  const [flying, setFlying] = useState(false)

  useEffect(() => {
    tmr = setInterval(() => {
      const today = dayjs()

      const months = date.diff(today, 'month')
      const daysCalc = date.diff(today, 'day')
      // Calc remaining Days
      setDays(daysCalc)

      let timeDiff = dayjs(today)
      // Calc remaining hours
      timeDiff = timeDiff.add(daysCalc, 'day')
      const hoursCalc = date.diff(timeDiff, 'hour')
      setHours(hoursCalc)
      // Calc remaining minutes
      timeDiff = timeDiff.add(hoursCalc, 'hour')
      const minutesCalc = date.diff(timeDiff, 'minute')
      // Calc remaining seconds
      setMinutes(minutesCalc)
      timeDiff = timeDiff.add(minutesCalc, 'minute')
      const secondsCalc = date.diff(timeDiff, 'second')
      setSeconds(secondsCalc)

      // One month remaining?
      if (months < 1 && daysCalc >= 7) {
        setPartyOneMonth(true)
      }

      // One Week
      if (daysCalc < 7 && daysCalc >= 3) {
        setPartyOneMonth(false)
        setPartyOneWeek(true)
      }

      // Three days remaining?
      if (daysCalc < 3 && daysCalc >= 2) {
        setPartyOneWeek(false)
        setPartyThreeDays(true)
      }

      // Two days remaining?
      if (daysCalc < 2 && daysCalc >= 1) {
        setPartyThreeDays(false)
        setPartyTwoDays(true)
      }

      // One day or less remaining?
      if (daysCalc === 0) {
        setPartyTwoDays(false)
        if (hoursCalc >= 3) {
          setPartyOneDay(true)
        }
        // Three hours remaining?
        if (hoursCalc === 2) {
          setPartyOneDay(false)
          setPartyThreeHours(true)
        }
        // Three hours remaining?
        if (hoursCalc === 1) {
          setPartyThreeHours(false)
          setPartyTwoHours(true)
        }
        // One hour or less remaining?
        if (hoursCalc <= 0) {
          if (minutesCalc >= 10) {
            setPartyTwoHours(false)
            setPartyOneHour(true)
          }
          // 10 minutes remaining?
          if (minutesCalc < 10 && minutesCalc >= 1) {
            setPartyOneHour(false)
            setPartyTenMinutes(true)
          }
          if (minutesCalc < 1 && secondsCalc >= 0) {
            setPartyTenMinutes(false)
            setPartyIsOn(true)
          }
        }
      }

      if (
        daysCalc <= 0 &&
        hoursCalc <= 0 &&
        minutesCalc <= 0 &&
        secondsCalc <= 0
      ) {
        // Still vacations mode?
        const daysOff = dayjs(toDate).diff(today, 'day')
        if (minutesCalc <= 0 && secondsCalc <= 0 && daysOff > 0) {
          setPartyIsOn(false)
          setFlying(true)
        }

        if (minutesCalc <= 0 && secondsCalc <= 0 && daysOff <= 0) {
          setFlying(false)
          clearInterval(tmr)
        }
      }
    }, 1000)
    return () => {
      clearInterval(tmr)
    }
  }, [])

  return (
    <div className="di-f fldi-c alit-c">
      <h1>Mexico Trip</h1>
      <div className={clsx('di-f', 'fldi-r', 'juco-sb', styles.boxContainer)}>
        <BoxCount counter={formatCount(days)} label="DAYS" />
        <BoxCount counter={formatCount(hours)} label="HOURS" />
        <BoxCount counter={formatCount(minutes)} label="MINUTES" />
        <BoxCount counter={formatCount(seconds)} label="SECONDS" />
      </div>
      {partyOneMonth && <div>QUEDA MENOS DE 1 MES</div>}
      {partyOneWeek && <div>QUEDA MENOS DE 1 SEMANA</div>}
      {partyThreeDays && <div>QUEDA MENOS DE 3 DIAS</div>}
      {partyTwoDays && <div>QUEDA MENOS DE 2 DIAS</div>}
      {partyOneDay && <div>YA FALTA MENOS DE 1 DIA</div>}
      {partyThreeHours && (
        <div>
          QUEDA MENOS DE 3 HORAS...ya deberíamos estar en el aeropuerto!
        </div>
      )}
      {partyTwoHours && <div>QUEDA MENOS DE 2 HORAS</div>}
      {partyOneHour && <div>QUEDA MENOS DE 1 HORA</div>}
      {partyTenMinutes && <div>QUEDA MENOS DE 10 MINUTOS!!!</div>}
      {partyIsOn && <div>Desconteo...</div>}
      {flying && <Flying />}
    </div>
  )
}

CountdownMexicoTrip.propTypes = {
  fromDate: string,
  toDate: string
}

CountdownMexicoTrip.defaultProps = {
  fromDate: dayjs('2020-02-07 06:30').toString(),
  toDate: dayjs('2020-02-23 23:00').toString()
}

export default CountdownMexicoTrip
