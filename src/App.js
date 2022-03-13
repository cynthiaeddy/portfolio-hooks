import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import SplashScreen from './components/splash/SplashScreen'
import Navbar from './components/Navbar'
import ProjectSolo from './components/ProjectSolo'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  let routes = (
    <Routes>
      <Route exact path='/' element={<SplashScreen />} />
      <Route exact path='/projects' element={<Projects />} />
      <Route exact path='/projects/:title' element={<ProjectSolo />} />
      <Route path='*' element={{ Error }} />
    </Routes>
  )
  return (
    <div className='container'>
      <Router>
        <Navbar />
        {routes}
      </Router>
      <Footer />
    </div>
  )
}

export default App
