import React, { createContext, useEffect, useState } from 'react'
import { listLenguages } from '../data/lenguaje'
import { listTheme } from '../data/theme'

const miau = {
  bla: (a: string) => {},
  lenguaje: 'en',
  themeMode: true,
  setThemeMode: (a: boolean) => {},
  idiome: listLenguages.en,
  theme: listTheme.dark,
}

type Props = {
  children?: any
}

export const FullContext = createContext<typeof miau | null>(null)

export function FullContextProvider({ children }: Props) {
  const [language, setLanguage] = useState('en')
  const [mode, setMode] = useState(false)
  const [theme, setTheme] = useState(listTheme.dark)
  const [properties, setProperties] = useState(listLenguages.en)

  useEffect(() => {
    language === 'en'
      ? setProperties(listLenguages.en)
      : language === 'es'
      ? setProperties(listLenguages.es)
      : setProperties(listLenguages.pt)
  }, [language])

  useEffect(() => {
    mode ? setTheme(listTheme.dark) : setTheme(listTheme.light)
  }, [mode])

  function setLengua(params: string) {
    try {
      setLanguage(params)
    } catch (error) {
      console.log('Ocurrio un error al cambiar de idioma: ' + error)
    }
  }

  function setThemeMode(params: boolean) {
    try {
      setMode(params)
    } catch (error) {
      console.log('Ocurrio un error al cambiar de modo: ' + error)
    }
  }

  return (
    <FullContext.Provider
      value={{
        lenguaje: language,
        bla: setLengua,
        themeMode: mode,
        setThemeMode: setThemeMode,
        idiome: properties,
        theme: theme,
      }}
    >
      {children}
    </FullContext.Provider>
  )
}
