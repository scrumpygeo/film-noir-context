import FilmList from './components/FilmList'
import NewFilmForm from './components/NewFilmForm'
import FilmContextProvider from './contexts/FilmContext'

function App() {
  return (
    <div className='App'>
      <FilmContextProvider>
        <FilmList />
        <NewFilmForm />
      </FilmContextProvider>
    </div>
  )
}

export default App
