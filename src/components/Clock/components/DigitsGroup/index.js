import React, { memo } from 'react'
import { bool, number, oneOfType, string } from 'prop-types'

import { stringLeftPad } from '@modules/miscellaneous'
import Digit from '../Digit'
import { digits } from '../../modules/constants'

const DigitsGroup = memo(
  ({ groupName, data, hasZeroFill, padString, padLeft }) => {
    const items = hasZeroFill
      ? stringLeftPad(data, padString, padLeft * -1).split('')
      : [data]
    return (
      <>
        {items.map((digit, index) => (
          <Digit key={`${groupName}-${index}`} data={digits.get(digit)} />
        ))}
      </>
    )
  }
)

DigitsGroup.propTypes = {
  groupName: string.isRequired,
  data: oneOfType([string, number]),
  padString: string,
  padLeft: number,
  hasZeroFill: bool
}

DigitsGroup.defaultProps = {
  data: '',
  padString: '0',
  padLeft: 2,
  hasZeroFill: true
}

export default DigitsGroup
