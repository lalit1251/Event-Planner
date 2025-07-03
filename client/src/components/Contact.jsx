import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import contact from "../assets/contact.webp";

const Contact = () => {
  return (
    <>
    <div className='fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden'>
        <img src={contact} width={1535} alt="" />
    </div>
    
    </>
  )
}

export default Contact