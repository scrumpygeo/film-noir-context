import FilmList from './components/FilmList'
import FilmContextProvider from './contexts/FilmContext'

function App() {
  return (
    <div className='App'>
      <FilmContextProvider>
        <FilmList />
      </FilmContextProvider>
    </div>
  )
}

export default App
