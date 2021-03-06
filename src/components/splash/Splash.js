import React from 'react'
import '../../stylesheets/Splash.css'
import swirl_sm from '../../assets/swirl_sm.jpg'

const Splash = () => {
  return (
    <div className='splash-image'>
      <div className='splash-logo'>
        <img src={swirl_sm} className='swirl' alt='logo' />
      </div>
    </div>
  )
}
export default Splash
