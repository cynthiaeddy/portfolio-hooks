import { Link } from 'react-router-dom'
import '../stylesheets/Navbar.css'

const Navbar = () => {
  return (
    <nav id='navbar' className='navbar'>
      <h2>
        <ul>
          <li>
            <Link to='/' className='home'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/projects' className='projects'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/about-me' className='about-me'>
              About Me
            </Link>
          </li>
        </ul>
      </h2>
    </nav>
  )
}

export default Navbar
