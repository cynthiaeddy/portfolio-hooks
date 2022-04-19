import React from 'react'
import '../../stylesheets/Menu.css'
import '../navbars/Navbar'

const Menu = props => {
  console.log('in menu, props.isMenuOpen', props.isMenuOpen)
  let classes = ['menu ']

  if (props.isMenuOpen) {
    classes = ['menu open']
  }
  return (
    <nav className={classes}>
      <ul>
        <li>
          {' '}
          <h2>projects </h2>
        </li>
        <li>
          <h2>about me</h2>
        </li>
      </ul>
    </nav>
  )
}
export default Menu
