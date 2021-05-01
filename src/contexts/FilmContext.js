import React, { createContext, useState } from 'react'

export const FilmContext = createContext()

const FilmContextProvider = (props) => {
  const [films, setFilms] = useState([
    { title: 'Double Indemnity', director: 'Billy Wilder' },
    { title: 'The Big Sleep', director: 'Howard Hawks' },
    { title: 'Sunset Boulevard', director: 'Billy wilder' },
    { title: 'The Falcon', director: 'John Huston' },
    { title: 'Out of the Past', director: 'Jacques Tourneur' },
  ])
  return (
    <FilmContext.Provider value={{ films }}>
      {props.children}
    </FilmContext.Provider>
  )
}

export default FilmContextProvider
