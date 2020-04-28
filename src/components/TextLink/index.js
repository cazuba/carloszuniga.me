import React, { memo, useContext } from 'react'
import { string, func, node } from 'prop-types'
import clsx from 'clsx'

// context
import { ThemeContext, DARK_MODE } from '@context/ThemeContext'

// styles
import styles from './_.module.scss'

const TextLink = memo(({ children, to, title, rel, target, className, onClick }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <a
      href={to}
      title={title}
      rel={rel}
      target={target}
      onClick={onClick}
      className={clsx(
        'd-inline-flex',
        'align-items-center',
        'text-decoration-none',
        styles.link,
        className,
        { [styles.darkLink]: theme === DARK_MODE }
      )}
    >
      {children}
    </a>
  )
})

TextLink.propTypes = {
  children: node.isRequired,
  rel: string.isRequired,
  className: string,
  to: string,
  title: string,
  target: string,
  onClick: func
}

TextLink.defaultProps = {
  className: '',
  to: '#/',
  target: '_self',
  onClick: () => null
}

export default TextLink
