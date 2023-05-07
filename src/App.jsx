import './App.css'
import { Route, Routes } from 'react-router-dom'

//Components
import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './pages/StarshipPage/StarshipPage'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<StarshipList />}/>
        <Route path='starships/:starshipId' element={<StarshipPage />}/>
      </Routes>
    </>
  )
}

export default App
