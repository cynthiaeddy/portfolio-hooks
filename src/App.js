import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import SplashScreen from './components/splash/SplashScreen'
import Navbar from './components/navbars/Navbar'
import NavbarMobile from './components/navbars/NavbarMobile'
import Menu from './components/navbars/Menu'

import Logo from './components/Logo'
import Projects from './components/Projects'
import ProjectSolo from './components/ProjectSolo'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  let isMobile
  width <= 600 ? (isMobile = true) : (isMobile = false)

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  const menuOpenClickHandler = () => {
    setIsMenuOpen(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }))
    console.log('in menu open click handler')
  }

  let routes = (
    <Routes>
      <Route exact path='/' element={<SplashScreen />} />
      <Route exact path='/projects' element={<Projects />} />
      <Route exact path='/projects/:title' element={<ProjectSolo />} />
      <Route exact path='/about-me' element={<AboutMe />} />
      <Route path='*' element={{ Error }} />
    </Routes>
  )
  return (
    <div className='container'>
      <Router>
        {!isMobile ? (
          <Navbar />
        ) : (
          <NavbarMobile
            menuOpenClickHandler={menuOpenClickHandler}
            isMenuOpen={isMenuOpen}
          />
        )}
        <Menu isMenuOpen={isMenuOpen} />

        <Logo />
        {routes}
      </Router>
      <Footer />
    </div>
  )
}

export default App

{
  /* <Navbar menuOpenClickHandler={menuOpenClickHandler} show={isMenuOpen} />
<Menu isMenuOpen={isMenuOpen} /> */
}
