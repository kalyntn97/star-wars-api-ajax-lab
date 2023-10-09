//npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
//services
import { getStarship } from '../../services/sw-api'
//css
import './StarshipDetails.css'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams() 

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [starshipId])

  if (!starshipDetails.name) return <h1>Loading Starship Details...</h1>

  return ( 
    <main>
        <h1>Starship details</h1>
      <div className='details-container'>
        <h3>NAME: {starshipDetails.name}</h3>
        <h3>MODEL: {starshipDetails.model}</h3>
        <Link to='/starships'>RETURN</Link>
      </div>
    </main>
   )
}
 
export default StarshipDetails