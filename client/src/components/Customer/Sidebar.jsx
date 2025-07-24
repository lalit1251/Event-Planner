import React from 'react'
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaLifeRing,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({active , setActive}) => {
  const { setUser, setIsLogin, setIsAdmin } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await api.get("/auth/logout");
    setUser("");
    sessionStorage.removeItem("EventUser");
    setIsLogin(false);
    setIsAdmin(false);
    navigate("/");
  };




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
                className={`flex items-center gap-3 border border-gray-200 p-4 rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#f97e04] to-[#5e0d6ed4] hover:text-white hover:shadow-md hover:scale-105 ${
                  active === "overview" && "bg-gradient-to-r from-[#f97e04] to-[#5e0d6ed4] text-white shadow-md scale-105"
                }`}
                onClick={()=>setActive("overview")}
              >
                <FaTachometerAlt /> Overview
              </li>

              <li
             className={`flex items-center gap-3 border border-gray-200 p-4 rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#f97e04] to-[#5e0d6ed4] hover:text-white hover:shadow-md hover:scale-105 ${
                  active === "profile" && "bg-gradient-to-r from-[#f97e04] to-[#5e0d6ed4] text-white shadow-md scale-105"
                }`}
                onClick={()=>setActive("profile")}
              >
                <FaUser /> Profile
                </li>

                <li
                className={`flex items-center gap-3 border border-gray-200 p-4 rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-[#f97e04] to-[#5e0d6ed4] hover:text-white hover:shadow-md hover:scale-105 ${
                  active === "bookings" && "bg-gradient-to-r from-[#f97e04] to-[#5e0d6ed4] text-white shadow-md scale-105"
                }`}
                onClick={()=>setActive("bookings")}
              >
                <FaCalendarCheck /> Bookings
                </li>

                <li
                className={`flex items-center gap-3 border border-gray-200 p-4 rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#f97e04] to-[#5e0d6ed4] hover:text-white hover:shadow-md hover:scale-105 ${
                  active === "support" && "bg-gradient-to-r from-[#f97e04] to-[#5e0d6ed4] text-white shadow-md scale-105"
                }`}
                onClick={()=>setActive("support")}
              >
                <FaLifeRing /> Support</li>

                <li
                className={`flex items-center gap-3 border border-gray-200 p-4 rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#f97e04] to-[#5e0d6ed4] hover:text-white hover:shadow-md hover:scale-105 ${
                  active === "feedback" && "bg-gradient-to-r from-[#f97e04] to-[#5e0d6ed4] text-white shadow-md scale-105"
                }`}
                onClick={()=>setActive("feedback")}
              >
                <FaCommentDots /> Feedback
                </li>

              </ul>
          </div>
          
        </div>

        <div>
          <button className='text-xl text-red-500 font-bold w-full h-full border border-red-500 p-3 rounded-lg flex gap-2 items-center justify-center hover:bg-red-500 hover:text-white'
          onClick={handleLogout} >
            Logout
            <FaSignOutAlt/>
          </button>
        </div>


    </div>
    
    </>
  )
}

export default Sidebar;