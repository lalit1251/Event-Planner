import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Hero from './components/Hero'
import Home from './pages/Home'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App