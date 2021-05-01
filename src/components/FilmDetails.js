import React, { useContext } from 'react'
import { FilmContext } from '../contexts/FilmContext'

const FilmDetails = ({ film }) => {
  const { removeFilm } = useContext(FilmContext)
  return (
    <li onClick={() => removeFilm(film.id)}>
      <p className='title'>{film.title}</p>
      <p className='director'>{film.director}</p>
    </li>
  )
}

export default FilmDetails
