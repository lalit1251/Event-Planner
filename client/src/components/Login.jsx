import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import loginbg_2 from "../assets/loginbg_2.jpg"
const Login = () => {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <img src={loginbg_2} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="backdrop-blur-lg bg-white/30 border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md text-white relative z-10 max-h-screen overflow-y-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-white/90" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-white/90" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-400 transition-colors font-medium shadow-md"
          >
            Sign In
          </button>
          <div>
            Don't have an account ? 
            <Link to={"/register"} className='text-yellow-500 pl-20 font-bold'>Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login