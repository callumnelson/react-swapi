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

  console.log(starshipList)

  return ( 
    <main>
      <h1 className="page-title">You'll need a tray</h1>
      {/* {starshipList.map(starship => (
        <div key={starship.id}>
          <Link />
        </div>
      ))} */}
    </main>
  )
}
 
export default StarshipList