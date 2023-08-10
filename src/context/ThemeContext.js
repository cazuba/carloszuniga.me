import React, { useState, useMemo } from 'react'
import { any } from 'prop-types'


export const DARK_MODE = 'dark'
export const LIGHT_MODE = 'light'

export const ThemeContext = React.createContext(DARK_MODE)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LIGHT_MODE)
  function toggleTheme() {
    setTheme(prevState => (prevState === DARK_MODE ? LIGHT_MODE : DARK_MODE))
  }
  const text = useMemo(() => theme === DARK_MODE ? LIGHT_MODE : DARK_MODE, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, text, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: any.isRequired
}
