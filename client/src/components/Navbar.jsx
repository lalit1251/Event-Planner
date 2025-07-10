import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
   <>
    <div className="w-full bg-transparent py-4 px-6 z-20 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4 text-[#43054e] text-lg font-serif">

        {/* Left links */}
        <div className="flex gap-10 pl-20 items-center ">
          <Link to="/about" className="hover:text-pink-600">ABOUT</Link>
          <Link to="/services" className="hover:text-pink-600">OUR SERVICES</Link>
          <Link to="/stories" className="hover:text-pink-600">CLIENT STORIES</Link>
        </div>

        {/* Logo center */}
        <div className="">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-22" />
          </Link>
        </div>

        {/* Right links */}
        <div className="flex gap-10 pr-20 items-center ">
          <Link to="/gallery" className="hover:text-pink-600">GALLERY</Link>
          <Link to="/contact" className="hover:text-pink-600">CONTACT US</Link>
          <button
            onClick={() => navigate('/login')}
            className="hover:text-pink-600"
          >
            LOGIN TO PLAN EVENT
          </button>
        </div>
        
      </div>
    </div>
   </>
  );
};

export default Navbar;
