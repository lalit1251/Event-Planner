import React from 'react'
import back from '../assets/back.webp'
const Hero = () => {
  return (
    <>
    <div className=" mt-[-10%]  relative h-188 bg-center w-full flex  ">
      <img src={back} alt="" width={1521} className=''/>

      <div className="absolute z-10 pl-100">
          <h1 className=" mt-45 text-5xl bg-gradient-to-r from-[#f97e04] to-[#5e0d6ed4] bg-clip-text text-transparent font-serif  font-normal text-center">
             Turn Your Dream's Into Reality 
          </h1>
          <div className="flex gap-5 mt-2 ">
            <button className="bg-[#E75480] hover:bg-[#FF8C00] text-white font-medium px-5 py-2.5 rounded-2xl  shadow-inner hover:shadow-md backdrop-blur-sm transition-all duration-300">Read More</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default Hero