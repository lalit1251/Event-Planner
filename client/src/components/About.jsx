import React from 'react'
import newlogo from "../assets/newlogo"
const About = () => {
  return (
    <>
    <div className="bg-transparent flex justify-center  gap-10 pl-9 text-xl font-semiboldbold items-center sticky text-[#FFD700] top-0 z-99">
          <Link to={"/"}>
            <img src={newlogo} alt='' className='h-[5em]'/>
          </Link>
    </div>
    </>
  )
}

export default About