import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import loginbg_2 from "../assets/loginbg_2.jpg"
import api from "../config/api";
import {toast} from "react-hot-toast"
import { useAuth } from '../context/AuthContext';


  const Login = () => {
  const { user, setUser, isLogin, setIsLogin, isAdmin, setIsAdmin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitKro = async (e) => {
    e.preventDefault();
    const logindata = {
      email: email,
      password: password,
    };
    
    try{
      const res = await api.post("/auth/login", logindata);
      toast.success(res.data.message);
      setEmail("")
      setPassword("")
      setUser(res.data.data);
      sessionStorage.setItem("EventUser",JSON.stringify(res.data.data));
      setIsLogin(true);
      res.data.data.role === "Admin"
        ? (setIsAdmin(true), navigate("/adminpanel"))
        : navigate("/");
    }catch(error){
      toast.error(
        `Error : ${error.response?.status || error.message} | ${error.response?.data.message || ""}`
      );
      console.log(error);
    }

  }
  return (
    <>
    <div className="fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <img src={loginbg_2} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />

      
      <div className="backdrop-blur-lg bg-white/30 border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md text-white relative z-10 max-h-screen overflow-y-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-5" onSubmit={formSubmitKro}>
          <div>
            <label className="block mb-1 text-sm font-medium text-white/90" htmlFor="email">
              Email
            </label>
            <input
              name='email'
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-violet-600 font font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-white/90" htmlFor="password">
              Password
            </label>
            <input
              name='password'
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-violet-600 font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-400 transition-colors font-medium shadow-md"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm font-medium text-white mt-6">
              Don’t have an account?{" "}
              <span
                className="text-yellow-400 pl-4 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
      </div>
    </div>
  
    </>
  )
}

export default Login