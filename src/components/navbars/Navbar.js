import { NavLink } from 'react-router-dom'
import '../../stylesheets/Navbar.css'

const Navbar = () => {
  return (
    <nav id='navbar'>
      <h2>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/about-me'>About Me</NavLink>
          </li>
        </ul>
      </h2>
    </nav>
  )
}

export default Navbar
