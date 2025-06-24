import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Hero from './components/Hero'
import Home from './pages/Home'
import Login from './components/Login'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App