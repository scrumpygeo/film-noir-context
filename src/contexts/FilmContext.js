import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const FilmContext = createContext()

const FilmContextProvider = (props) => {
  const [films, setFilms] = useState([
    { title: 'Double Indemnity', director: 'Billy Wilder' },
    { title: 'The Big Sleep', director: 'Howard Hawks' },
    { title: 'Sunset Boulevard', director: 'Billy wilder' },
    { title: 'The Falcon', director: 'John Huston' },
    { title: 'Out of the Past', director: 'Jacques Tourneur' },
  ])

  const addFilm = (title, director) => {
    setFilms([...films, { title, director, id: uuidv4() }])
  }

  return (
    <FilmContext.Provider value={{ films, addFilm }}>
      {props.children}
    </FilmContext.Provider>
  )
}

export default FilmContextProvider
