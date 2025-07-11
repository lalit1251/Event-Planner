import React from 'react'
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaLifeRing,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({active , setActive}) => {
  return (
    <>
    <div className='w-100 border min-h-[87vh] p-5 flex flex-col justify-between'>
        <div>
            <div className='border-b-2 pb-3 h-fit'>
                <span className='text-2xl font-bold'>Your Dashboard</span>
            </div>

            <div className='py-8 px-5'>
              <ul className='grid gap-2'>
               <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-amber-600 hover:text-white ${
                  active === "overview" && "bg-amber-600 text-white"
                }`}
                onClick={()=>setActive("overview")}
              >
                <FaTachometerAlt /> Overview
              </li>

              <li
              className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-amber-600 hover:text-white ${
                  active === "overview" && "bg-amber-600 text-white"
                }`}
                onClick={()=>setActive("profile")}
              >
                <FaUser /> Profile
                </li>

                <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-amber-600 hover:text-white ${
                  active === "overview" && "bg-amber-600 text-white"
                }`}
                onClick={()=>setActive("bookings")}
              >
                <FaTachometerAlt /> Bookings
                </li>

                <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-amber-600 hover:text-white ${
                  active === "overview" && "bg-amber-600 text-white"
                }`}
                onClick={()=>setActive("support")}
              >
                <FaTachometerAlt /> Support</li>

                <li
                className={`flex items-center gap-2 border p-3 rounded-lg text-lg hover:bg-amber-600 hover:text-white ${
                  active === "overview" && "bg-amber-600 text-white"
                }`}
                onClick={()=>setActive("feedback")}
              >
                <FaTachometerAlt /> Feedback
                </li>

              </ul>
          </div>
          
        </div>

        <div>
          <button className='text-xl text-red-500 font-bold w-full h-full border border-red-500 p-3 rounded-lg flex gap-2 items-center justify-center hover:bg-red-500 hover:text-white'>
            Logout
            <FaSignOutAlt/>
          </button>
        </div>


    </div>
    
    </>
  )
}

export default Sidebar;