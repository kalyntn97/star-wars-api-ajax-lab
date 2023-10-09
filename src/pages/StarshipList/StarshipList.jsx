//npm modules
import { Link } from "react-router-dom"
//services
import { useState, useEffect } from "react"
import { getStarshipList } from "../../services/sw-api"
//css
import './StarshipList.css'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results);
    }
    fetchStarshipList()
  }, [])

  if (!starshipList.length) return <h1>Loading Starships...</h1>

  return ( 
    <main>
      <h1>Starship List</h1>
      <div className="container">
        {starshipList.map(starship =>
          <div className="link-container" key={starship.url.split('/').at(-2)}>
            <Link to={`/starships/${starship.url.split('/').at(-2)}`}>{starship.name}</Link>
          </div> 
        )}
      </div>
    </main>
   )
}
 
export default StarshipList