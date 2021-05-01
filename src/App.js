import FilmList from './components/FilmList'
import Navbar from './components/Navbar'
import NewFilmForm from './components/NewFilmForm'
import FilmContextProvider from './contexts/FilmContext'

function App() {
  return (
    <div className='App'>
      <FilmContextProvider>
        <Navbar />
        <FilmList />
        <NewFilmForm />
      </FilmContextProvider>
    </div>
  )
}

export default App
