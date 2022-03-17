import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import SplashScreen from './components/splash/SplashScreen'
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import Projects from './components/Projects'
import ProjectSolo from './components/ProjectSolo'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

function App() {
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
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Logo />
          {routes}
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
