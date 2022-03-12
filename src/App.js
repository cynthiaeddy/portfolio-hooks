import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import './stylesheets/logo.css'
import './stylesheets/myLogoRoll.css'
import swirl_sm from './assets/swirl_sm.jpg'
import SplashScreen from './components/splash/SplashScreen'

function App() {
  let routes = (
    <Routes>
      <Route exact path='/' element={<SplashScreen />} />

      <Route path='*' element={{ Error }} />
    </Routes>
  )
  return <Router>{routes}</Router>
}

export default App
