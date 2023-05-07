//node modules
import { useState, useEffect } from "react"

//services
import { getAllStarships } from "../../services/sw-api"

//components
import { Link } from "react-router-dom"

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData)
    }
    fetchStarships()
  },[])

  if (!starshipList.length) return <h3 className="page-title">Loading your ships...</h3>

  return ( 
    <main>
      <h1 className="page-title">You'll need a tray</h1>
      <div className="starship-container">
        {starshipList.map( (starship, idx) => (
          <Link 
            key={idx} 
            className="starship-card" 
            to={`/starships/${starship.url.split('/').slice(-2, -1)}`}
          >    
            {starship.name}
          </Link>
        ))}
      </div>
    </main>
  )
}
 
export default StarshipList