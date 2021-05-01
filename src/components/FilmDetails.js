import React, { useContext } from 'react'

const FilmDetails = ({ film }) => {
  return (
    <li>
      <p>
        <strong>Movie: </strong> {film.title} <strong>Director: </strong>{' '}
        {film.director}
      </p>
    </li>
  )
}

export default FilmDetails
