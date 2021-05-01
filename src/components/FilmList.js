import React, { useContext } from 'react'
import { FilmContext } from '../contexts/FilmContext'

const FilmList = () => {
  const { films } = useContext(FilmContext)
  return films.length ? (
    <div>
      <ul>
        {films.map((film) => {
          return <li>{film.title}</li>
        })}
      </ul>
    </div>
  ) : (
    <div>No films listed</div>
  )
}

export default FilmList
