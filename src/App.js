import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import SplashScreen from './components/splash/SplashScreen'
import Navbar from './components/Navbar'

function App() {
  let routes = (
    <Routes>
      <Route exact path='/' element={<SplashScreen />} />

      <Route path='*' element={{ Error }} />
    </Routes>
  )
  return (
    <div className='container'>
      <Router>
        <Navbar />
        {routes}
      </Router>
    </div>
  )
}

export default App
