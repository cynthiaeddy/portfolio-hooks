import React from 'react'
import '../stylesheets/Menu.css'
import './Navbar'

class Menu extends React.Component {
  render() {
    console.log(this.props)
    let classes = ['menu ']

    if (this.props.isMenuOpen) {
      classes = ['menu open']
    }
    return (
      <nav className={classes}>
        <ul>
          <li>search</li>
          <li>latest</li>
          <li>the soapbox</li>
          <li>apocalypse soon</li>
          <li>sold short</li>
          <li>critical mass</li>
          <li>podcasts</li>
        </ul>
      </nav>
    )
  }
}
export default Menu
