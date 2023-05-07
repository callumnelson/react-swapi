//npm modules
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//services
import { getStarship } from "../../services/sw-api"

const StarshipPage = () => {
  const [starship, setStarship] = useState({})
  const [pilots, setPilots] = useState([])
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchStarshipInfo = async () => {
      const {starship, pilots} = await getStarship(starshipId)
      setStarship(starship)
      setPilots(pilots)
    }
    fetchStarshipInfo()
  }, [starshipId])

  if (!starship.name) return <h3 className="page-title">Loading your ship...</h3>
  
  return (
    <main className="starship-page">
      <div className="starship-info-container">
        <h4>NAME: {starship.name}</h4>
        <h4>MODEL: {starship.model}</h4>
        {!pilots.length ? 
          <h4>No Pilots</h4>
          :
          (<>
            <h4>PILOTS:</h4>
            <ul>
              {pilots.map( (pilot, idx) => (
                <li key={idx}>{pilot.name}</li>
              ))}
            </ul>
          </>)
        }
        <Link className='return-link' to='/'>RETURN TO FLEET</Link>
      </div>
    </main>
  )
}
 
export default StarshipPage