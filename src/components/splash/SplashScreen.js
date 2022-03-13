import { useState, useEffect } from 'react'
import ProjectMain from '../ProjectMain'
import Splash from './Splash'

const SplashScreen = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [timePassed, setTimePassed] = useState(false)
  let isMobile
  width <= 600 ? (isMobile = true) : (isMobile = false)

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    setTimeout(() => {
      hasTimePassed()
    }, 5000)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  const hasTimePassed = () => {
    setTimePassed(true)
  }

  return !timePassed ? <Splash /> : <ProjectMain />
  // return !this.state.timePassed && !isMobile ? <Splash /> : <ProjectMain />

  // }
}
export default SplashScreen
