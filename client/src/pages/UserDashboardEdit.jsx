import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../config/api";
import { IoIosSave } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserDashboardEdit = () => {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState("");
  const [preview, setPreview] = useState("");
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      setUserData(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setPicture(e.target.files[0]);
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("fullName", userdata.fullName);
    formData.append("email", userdata.email);
    formData.append("picture", picture);

    try {
      const res = await api.put("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(res.data.message);
      setUserData(res.data.data);
      navigate("/userDashboard");
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard!</p>
      </div>

      <div className="bg-white relative mx-auto my-5 w-[50%] border p-6 rounded-lg shadow-md flex justify-center gap-20 items-center">
        <div className=" relative">
          <div className="w-50 h-50 rounded-full">
            <img
              src={preview || userdata.photo}
              alt=""
              className="w-50 h-50 rounded-full object-cover"
            />
          </div>
          <div className="border rounded-full p-2 w-fit absolute bottom-2 right-2 bg-rose-300 hover:bg-blue-500 hover:text-white">
            <label className="text-2xl" htmlFor="imageUpload">
              <FaCamera />
            </label>
            <input
              type="file"
              className="hidden"
              id="imageUpload"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="grid justify-around gap-5">
          <h3>
            <b>Name :</b>{" "}
            <input
              type="text"
              name="fullName"
              value={userdata.fullName}
              onChange={handelChange}
              className="p-2 border rounded-lg border-rose-300"
            />
          </h3>
          <h3>
            <b>Email :</b> {userdata.email}
          </h3>
          <h3>
            <b>Phone :</b>{" "}
            <input
              type="text"
              name="fullName"
              value={userdata.phone}
              onChange={handelChange}
              className="p-2 border rounded-lg border-rose-300"
            />
          </h3>
        </div>
        <button
          className="absolute top-1 right-1 border p-2 rounded-lg flex gap-2 justify-center items-center bg-rose-300 hover:bg-rose-400 text-lg"
          onClick={handleEditProfile}
        >
          <IoIosSave />
          {loading ? "Saving Data . . . " : "Save Data"}
        </button>
      </div>
    </>
  );
};

export default UserDashboardEdit;