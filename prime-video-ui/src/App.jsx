import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/login'
import Overview from './pages/Overview'
import Primevideo from './pages/Primevideo'
import Signup from './pages/Signup'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/" element={<Primevideo/>}/>
      </Routes>
    </Router>
  )
}
