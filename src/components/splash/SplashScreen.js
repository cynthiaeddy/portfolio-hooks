import { useState, useEffect } from 'react'
import Projects from '../Projects'
import Splash from './Splash'

const SplashScreen = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [timePassed, setTimePassed] = useState(false)
  let isMobile
  width <= 600 ? (isMobile = true) : (isMobile = false)

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    const timer = setTimeout(() => {
      hasTimePassed()
    }, 5000)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  const hasTimePassed = () => {
    setTimePassed(true)
  }

  return !timePassed ? <Splash /> : <Projects />
  // return !timePassed && !isMobile ? <Splash /> : <Projects />
}
export default SplashScreen
