import React from 'react'
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <>
    <div className="">
      <Link to={"/"} >HOME</Link>
      <Link to={"/about"} >ABOUT</Link>
      <Link to={"/services"} >SERVICES</Link>
      <Link to={"/stories"} >CLIENT STORIES</Link>
      <Link to={"/"}>
        <img src='logo' alt='' width="20px"/>
      </Link>
      <Link to={"/gallery"} >GALLERY</Link>
      <Link to={"/contact"} >CONTACT</Link>
      <button className=''>Login to Plan your Event</button>
    </div>
    </>
  )
}

export default Navbar;