//npm modules
import { Link } from 'react-router-dom'

//assets
import reactLogo from '../../assets/react.svg'

const NavBar = () => {
  return ( 
    <header>
      <Link to="/">
        <img src={ reactLogo } alt="The React Logo" className="logo logo-left"/>
      </Link>
      <nav>
        <h4>STAR WARS STARSHIPS</h4>
      </nav>
      <Link to="/">
        <img src={ reactLogo } alt="The React Logo" className="logo logo-right"/>
      </Link>
    </header>
  )
}

export default NavBar