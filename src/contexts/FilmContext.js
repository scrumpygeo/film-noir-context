import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const FilmContext = createContext()

const FilmContextProvider = (props) => {
  const [films, setFilms] = useState([
    { title: 'Double Indemnity', director: 'Billy Wilder', id: 1 },
    { title: 'The Big Sleep', director: 'Howard Hawks', id: 2 },
    { title: 'Sunset Boulevard', director: 'Billy wilder', id: 3 },
    { title: 'The Falcon', director: 'John Huston' },
    { title: 'Out of the Past', director: 'Jacques Tourneur', id: 4 },
  ])

  const addFilm = (title, director) => {
    setFilms([...films, { title, director, id: uuidv4() }])
  }

  const removeFilm = (id) => {
    setFilms(films.filter((film) => film.id !== id))
  }

  return (
    <FilmContext.Provider value={{ films, addFilm, removeFilm }}>
      {props.children}
    </FilmContext.Provider>
  )
}

export default FilmContextProvider
