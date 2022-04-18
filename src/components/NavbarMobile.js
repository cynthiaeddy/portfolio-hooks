import { useState } from 'react'
import '../stylesheets/Navbar.css'
import MenuButton from './MenuButton'

const NavbarMobile = props => {
  const [isMenuOpen, setIsMenuOpen] = useState()
  const [show, setShow] = useState()

  console.log(props)

  return (
    <nav className='Search-nav'>
      <MenuButton
        click={props.menuOpenClickHandler}
        isMenuOpenShow={props.show}
      />

      <ul className='Search-nav-words'>
        <li>projects </li>
        <li>about me</li>
      </ul>
    </nav>
  )
}
export default NavbarMobile
