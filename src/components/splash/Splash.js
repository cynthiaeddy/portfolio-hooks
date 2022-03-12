import React from 'react'
import '../../stylesheets/myLogoRoll.css'
import swirl_sm from '../../assets/swirl_sm.jpg'

const Splash = () => {
  return (
    <div className='home-image'>
      <aside className='aside logo'>
        <div className='homeLogo swirl_sm'>
          <img src={swirl_sm} className='swirl' alt='logo' />
        </div>
      </aside>
    </div>
  )
}
export default Splash
