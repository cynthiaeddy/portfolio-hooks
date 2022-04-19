import { useState } from 'react'
import '../stylesheets/Navbar.css'
import MenuButton from './MenuButton'

const NavbarMobile = props => {
  const [isMenuOpen, setIsMenuOpen] = useState()
  const [show, setShow] = useState()

  console.log(props)

  return (
    <nav id='navbar-mobile'>
      <MenuButton
        click={props.menuOpenClickHandler}
        isMenuOpenShow={props.show}
      />

      <ul className='navbar-mobile_li'>
        <li>
          <h2>projects </h2>
        </li>
        <li>
          <h2>about me</h2>
        </li>
      </ul>
    </nav>
  )
}
export default NavbarMobile
