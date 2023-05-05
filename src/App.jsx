import './App.css'
import { Route, Routes } from 'react-router-dom'

//Components
import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/Starships/Starships'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<StarshipList />}/>
      </Routes>
    </>
  )
}

export default App
