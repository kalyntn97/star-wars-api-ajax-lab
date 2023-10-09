//npm modules
import { NavLink } from "react-router-dom"
//assets
import Logo from '../../assets/star-wars-2.svg'
//css
import './Nav.css'

const Nav = () => {
  return ( 
      <nav>
        <div className="logo-container">
          <img id="logo" src={ Logo } alt="a-logo" />
        </div>
        <div className="links">
          <NavLink to='/starships' className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""}>STARSHIPS</NavLink>
        </div>
      </nav>
  )
}
 
export default Nav;