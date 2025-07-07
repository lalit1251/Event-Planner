import React, { useState } from 'react'
import loginbg_2 from "../assets/loginbg_2.jpg"
import {Link, useNavigate} from "react-router-dom"
import register from "../assets/register.jpg"
import api from "../config/api";
import {toast} from "react-hot-toast"
const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  })

  const handelChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((previousData) => ({ ...previousData, [name]: value }))
  }

  const handelSubmit = async(e) => {
    e.preventDefault();

    console.log(registerData);

    try{
      const res = await api.post("/auth/register",registerData);
      toast.success(res.data.message);
      setRegisterData({
      fullName: "",
      email: "",
      password: "",
      number: "",
    })
    }catch(error){
      toast.error(error.message)
    }

    
  }
  return (
    <>
    <div className=" w-full h-full flex items-center justify-center ">
          <img src={register} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="backdrop-blur-lg bg-white/30 border border-white/30 shadow-xl rounded-2xl p-8 max-w-md text-white relative z-10">
            <h2 className="text-3xl font-medium text-center text-[#c70b0b] mb-6">Register</h2>
            <form className="space-y-5" onSubmit={handelSubmit}>
              <div>
                <label className="block mb-1 text-sm font-medium text-[]" htmlFor="text">
                  Name
                </label>
                <input
                  name='name'
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-[#c70b0b] font-medium focus:outline-none  focus:ring-2 focus:ring-white/50"
                  placeholder="Your Full Name"
                  value={registerData.name}
                  onChange={handelChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-white/90" htmlFor="email">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-[#c70b0b] font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="you@example.com"
                  value={registerData.email}
                  onChange={handelChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-white/90" htmlFor="tel">
                  Phone Number
                </label>
                <input
                  name="number"
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-[#c70b0b] font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter you Phone Number"
                  value={registerData.number}
                  onChange={handelChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-white/90" htmlFor="password">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-[#c70b0b] font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="••••••••"
                  value={registerData.password}
                  onChange={handelChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-[#c70b0b] hover:bg-[#a25858] transition-colors font-medium shadow-md"
              >
                Register
              </button>
            </form>
            <p className="text-center text-sm font-medium text-white  mt-6">
              Already have an account?{" "}
              <span
                className="text-[#c70b0b] pl-4 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </div>
    </>
  )
}

export default Register