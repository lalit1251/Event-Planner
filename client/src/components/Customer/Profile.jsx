import React,{ useState , useEffect} from 'react'
import api from '../../config/api'
import {toast} from "react-hot-toast"
import {CiEdit} from "react-icons/ci"
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigate = useNavigate();
  const [userdata , setUserData] = useState("");

  const fetchUserData = async()=>{
    try{
      const res = await api.get("/user/profile");
      setUserData(res.data.data);
      toast.success(res.data.message);
    }catch(error){
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  }

  useEffect(()=>{
    fetchUserData();
  },[]);

  return (
    <>
    <div className="flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard!</p>
      </div>

      <div className="bg-white relative mx-auto my-5 w-[50%] border p-6 rounded-lg shadow-md flex justify-center gap-20 items-center">
        <div className="">
          <div className="w-50 h-50 rounded-full">
            <img
              src={userdata.photo}
              alt=""
              className="w-50 h-50 rounded-full object-cover"
            />
          </div>
          
        </div>
        <div className="grid justify-around gap-5">
          <h3>
            <b>Name :</b> {userdata.name}
          </h3>
          <h3>
            <b>Email :</b> {userdata.email}
          </h3>
          <h3>
            <b>Phone :</b> {userdata.number}
          </h3>
        </div>
        <button
          className="absolute top-1 right-1 border p-2 rounded-lg flex gap-2 justify-center items-center bg-rose-300 hover:bg-rose-400 text-lg"
          onClick={() => navigate("/userDashboardEdit")}
        >
          {" "}
          <CiEdit />
          Edit
        </button>
      </div>
    </>
  )
}

export default Profile;