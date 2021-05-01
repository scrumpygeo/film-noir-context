import React, { useContext } from 'react'
import { FilmContext } from '../contexts/FilmContext'

const Navbar = () => {
  const { films } = useContext(FilmContext)
  return (
    <nav className='navbar'>
      <h1>Film Noir Movies</h1>
      <p>{films.length} films available</p>
    </nav>
  )
}

export default Navbar
