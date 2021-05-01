import React, { useContext } from 'react'
import { FilmContext } from '../contexts/FilmContext'
import FilmDetails from '../components/FilmDetails'

const FilmList = () => {
  const { films } = useContext(FilmContext)
  return films.length ? (
    <div>
      <ul>
        {films.map((film) => {
          return <FilmDetails key={film.id} film={film} />
        })}
      </ul>
    </div>
  ) : (
    <div>No films listed</div>
  )
}

export default FilmList
