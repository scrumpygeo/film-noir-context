import React, { useContext } from 'react'
import { FilmContext } from '../contexts/FilmContext'

const FilmDetails = ({ film }) => {
  const { removeFilm } = useContext(FilmContext)
  return (
    <li onClick={() => removeFilm(film.id)}>
      <p>
        <strong>Movie: </strong> {film.title} <strong>Director: </strong>{' '}
        {film.director}
      </p>
    </li>
  )
}

export default FilmDetails
