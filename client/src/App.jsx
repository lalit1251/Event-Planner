import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
    </>
  )
}

export default App