import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
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
