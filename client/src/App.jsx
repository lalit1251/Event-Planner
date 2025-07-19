import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Hero from './components/Hero'
import Home from './pages/Home'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/Contact'
import {Toaster} from "react-hot-toast"
import Services from './components/Services';
import UserDashboard from "./pages/userDashboard";
import UserDashboardEdit from "./pages/UserDashboardEdit";
import CustomerDashboard from "./pages/CustomerDashboard";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Toaster/>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/register' element={<Register/>} />
       <Route path="/services" element={<Services />} />
      <Route path='/userDashboard' element={<UserDashboard/>} />
      <Route path="/userDashboardEdit" element={<UserDashboardEdit />} />
      <Route path="/dashboard" element={<CustomerDashboard />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App