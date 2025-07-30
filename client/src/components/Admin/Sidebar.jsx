import React from "react";
import {
  FaTachometerAlt,
  FaBoxes,
  FaUsers,
  FaCalendarCheck,
  FaQuestionCircle,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ active, setActive }) => {
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
      <div className="w-100 bg-gradient-to-b from-slate-50 to-slate-100 border-r border-gray-200 min-h-[87vh] p-6 flex flex-col justify-between shadow-lg">
        <div>
          <div className="border-b-2 border-indigo-200 pb-4 h-fit text-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Admin Dashboard
            </span>
          </div>

          <div className="py-8 px-2">
            <ul className="grid gap-3">
              <li
                className={`flex items-center gap-3 border border-gray-200 p-4 rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-md hover:scale-105 ${
                  active === "overview" &&
                  "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md scale-105"
                }`}
                onClick={() => setActive("overview")}
              >
                <FaTachometerAlt className="text-xl" /> Overview
              </li>
              <li
                className={`flex items-center gap-3 border border-gray-200 p-4 rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-md hover:scale-105 ${
                  active === "packages" &&
                  "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md scale-105"
                }`}
                onClick={() => setActive("packages")}
              >
                <FaBoxes className="text-xl" /> Packages
              </li>
              <li
                className={`flex items-center gap-3 border border-gray-200 p-4 rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-md hover:scale-105 ${
                  active === "customers" &&
                  "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md scale-105"
                }`}
                onClick={() => setActive("customers")}
              >
                <FaUsers className="text-xl" /> Customers
              </li>
              <li
                className={`flex items-center gap-3 border border-gray-200 p-4 rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-md hover:scale-105 ${
                  active === "bookings" &&
                  "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md scale-105"
                }`}
                onClick={() => setActive("bookings")}
              >
                <FaCalendarCheck className="text-xl" /> Bookings
              </li>
              <li
                className={`flex items-center gap-3 border border-gray-200 p-4 rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-md hover:scale-105 ${
                  active === "cusQueries" &&
                  "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md scale-105"
                }`}
                onClick={() => setActive("cusQueries")}
              >
                <FaQuestionCircle className="text-xl" /> Customer Queries
              </li>
              <li
                className={`flex items-center gap-3 border border-gray-200 p-4 rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-md hover:scale-105 ${
                  active === "cusFeedback" &&
                  "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md scale-105"
                }`}
                onClick={() => setActive("cusFeedback")}
              >
                <FaCommentDots className="text-xl" /> Customer Feedback
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            className="text-lg text-red-600 font-semibold w-full border-2 border-red-300 p-4 rounded-xl flex gap-3 items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 hover:shadow-lg bg-red-50"
            onClick={handleLogout}
          >
            Logout
            <FaSignOutAlt className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;