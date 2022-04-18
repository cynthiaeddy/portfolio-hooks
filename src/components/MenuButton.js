import React from 'react'
import '../stylesheets/MenuButton.css'
import './Navbar'

class MenuButton extends React.Component {
  render() {
    console.log(this.props)
    let topClass = ['topLine']
    let midClass = ['middleLine']
    let bottomClass = ['bottomLine']

    if (this.props.isMenuOpenShow) {
      topClass = ['topLine open']
      midClass = ['middleLine open']
      bottomClass = ['bottomLine open']
    }
    return (
      <button className='toggle menu-button' onClick={this.props.click}>
        <div className={topClass} />
        <div className={midClass} />
        <div className={bottomClass} />
      </button>
    )
  }
}
export default MenuButton
