
import './Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (

    <nav className="grave-navbar">
      <div className="grave-navbar-container">
        <Link className="grave-navbar-name" to="/home" >
          <img src="/gravelogo.png" alt="gravelogo" className="navbar-image" />
          Grave        </Link>
      </div>
    </nav>


  )
}

export default Navbar;
