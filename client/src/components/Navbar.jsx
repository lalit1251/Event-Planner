import React from 'react'
import {Link , useNavigate} from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="bg-transparent flex justify-center  gap-10 pl-9 text-xl font-serif font-medium items-center sticky text-[#301934] top-0 z-99">
      
      <Link to={"/about"} className='hover:text-pink-600 hover:font-bold' >ABOUT</Link>
      <Link to={"/services"} className='hover:text-pink-600 hover:font-bold'> OUR SERVICES</Link>
      <Link to={"/stories"} className='hover:text-pink-600 hover:font-bold'>CLIENT STORIES</Link>
      <Link to={"/"}>
        <img src={logo} alt='' className='h-[5em]'/>
      </Link>
      <Link to={"/gallery"} className='hover:text-pink-600 hover:font-bold'>GALLERY</Link>
      <Link to={"/contact"} className='hover:text-pink-600 hover:font-bold'>CONTACT US</Link>
      <button className='hover:text-pink-600 hover:font-bold' onClick={()=> navigate("login")}>LOGIN TO PLAN EVENT{" "}</button>
    </div>
    </>
  )
}

export default Navbar;