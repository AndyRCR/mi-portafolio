import React, { useState } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext()

const GlobalStateContext = ({children}) => {

    const [theme, setTheme] = useState('light')

  return (
    <GlobalContext.Provider
    value = {{
        theme, setTheme
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext