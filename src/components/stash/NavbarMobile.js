import { useState } from 'react'
import '../../stylesheets/Navbar.css'
import MenuButton from './MenuButton'

const NavbarMobile = props => {
  console.log(props, 'navbar mobile props')

  return (
    <nav id='navbar-mobile'>
      <MenuButton
        click={props.menuOpenClickHandler}
        isMenuOpenShow={props.show}
      />
    </nav>
  )
}
export default NavbarMobile

// menuOpenClickHandler: this.props.menuOpenClickHandler,
// show: this.props.isMenuOpen,
