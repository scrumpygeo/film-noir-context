import React, { useContext, useState } from 'react'
import { FilmContext } from '../contexts/FilmContext'

const NewFilmForm = () => {
  const [title, setTitle] = useState('')
  const [director, setDirector] = useState('')
  const { addFilm } = useContext(FilmContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addFilm(title, director)
    setTitle('')
    setDirector('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Film Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type='text'
        placeholder='Director'
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        required
      />
      <input type='submit' value='Add Film' />
    </form>
  )
}

export default NewFilmForm
