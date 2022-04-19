import { useState } from 'react'
import '../../stylesheets/Navbar.css'
import MenuButton from './MenuButton'

const NavbarMobile = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  console.log(props, 'navbar mobile props')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav id='navbar-mobile'>
        <div className='navbar-mobile_menu' onClick={toggleMenu}>
          <MenuButton isOpen={isMenuOpen} />
        </div>
        <ul>
          <li>
            <h2>projects </h2>
          </li>
          <li>
            <h2>about me</h2>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        #navbar-mobile ul {
          display: ${isMenuOpen ? 'inline' : 'none'};
          background-color: white;
          height: 120px;
          width: 100vw;
          position: absolute;
        }
      `}</style>
    </>
  )
}
export default NavbarMobile
