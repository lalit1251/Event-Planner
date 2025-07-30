import React, { useEffect, useState } from "react";
import { IoIosCloseCircle, IoIosSave } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import api from "../../../config/api";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../context/AuthContext";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const ProfileEditModal = ({ isOpen, onClose, oldData }) => {
  const { setUser } = useAuth();
  const [userdata, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    photo: "",
    gender: "",
    occupation: "",
    address: "",
    city: "",
    state: "",
    district: "",
    representing: "",
  });

  const [preview, setPreview] = useState("");
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

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
    formData.append("picture", picture);
    formData.append("phone", userdata.phone);
    formData.append("gender", userdata.gender);
    formData.append("occupation", userdata.occupation);
    formData.append("address", userdata.address);
    formData.append("city", userdata.city);
    formData.append("state", userdata.state);
    formData.append("district", userdata.district);
    formData.append("representing", userdata.representing);

    try {
      const res = await api.put("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(res.data.message);
      setUser(res.data.data);
      sessionStorage.setItem("EventUser", JSON.stringify(res.data.data));
      onClose();
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
    if (oldData) {
      setUserData(oldData);
    }
  }, [isOpen, oldData]);

  if (!isOpen) return null;
  return (
    <>
      <div className="inset-0 fixed bg-black/70 flex justify-center items-center">
        <div
          className={`border w-1/2 max-h-7/10 mt-10 bg-white rounded-lg overflow-y-auto`}
        >
          <div className="text-xl flex justify-between p-3 border-b-2 sticky top-0 bg-white z-10">
            <h1 className="font-bold">Edit Profile</h1>
            <button onClick={onClose}>
              <IoIosCloseCircle className="text-3xl text-red-500" />
            </button>
          </div>

          <div className="flex flex-col gap-3 p-4">
            <div className="relative w-50 h-50">
              <div className="w-50 h-50 rounded-full ">
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
            <div className="grid gap-3 p-5  w-full grid-cols-[30%_70%] justify-items-center items-center">
              <span className="font-bold text-md">Email : </span>
              <input
                type="text"
                name="fullname"
                value={userdata.email}
                onChange={handelChange}
                className="p-2 w-full"
                disabled
              />

              <span className="font-bold text-md">Name : </span>
              <input
                type="text"
                name="fullname"
                value={userdata.fullName}
                onChange={handelChange}
                className="p-2 border rounded-lg border-rose-300 w-full"
              />
              <span className="font-bold text-md">Phone : </span>
              <input
                type="tel"
                name="phone"
                value={userdata.phone}
                onChange={handelChange}
                className="p-2 border rounded-lg border-rose-300 w-full"
              />
              <span className="font-bold text-md">Gender : </span>

              <select
                name="gender"
                value={userdata.gender}
                onChange={handelChange}
                className="p-2 border rounded-lg border-rose-300 w-full"
              >
                <option value="N/A">N/A</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <span className="font-bold text-md">Occupation : </span>
              <input
                type="text"
                name="occupation"
                value={userdata.occupation}
                onChange={handelChange}
                className="p-2 border rounded-lg border-rose-300 w-full"
              />
              <span className="font-bold text-md">Address : </span>
              <input
                type="text"
                name="address"
                value={userdata.address}
                onChange={handelChange}
                className="p-2 border rounded-lg border-rose-300 w-full"
              />
              <span className="font-bold text-md">City : </span>
              <input
                type="text"
                name="city"
                value={userdata.city}
                onChange={handelChange}
                className="p-2 border rounded-lg border-rose-300 w-full"
              />
              <span className="font-bold text-md">District : </span>
              <input
                type="text"
                name="district"
                value={userdata.district}
                onChange={handelChange}
                className="p-2 border rounded-lg border-rose-300 w-full"
              />
              <span className="font-bold text-md">State : </span>
              <select
                name="state"
                value={userdata.state}
                onChange={handelChange}
                className="p-2 border rounded-lg border-rose-300 w-full"
              >
                <option value="N/A">N/A</option>
                {indianStates ? (
                  indianStates.map((rajya, i) => (
                    <option value={rajya} key={i}>
                      {rajya}
                    </option>
                  ))
                ) : (
                  <option value={""}>No states available</option>
                )}
              </select>
              <span className="font-bold text-md">Representing : </span>
              <select
                name="representing"
                value={userdata.representing}
                onChange={handelChange}
                className="p-2 border rounded-lg border-rose-300 w-full"
              >
                <option value="N/A">N/A</option>
                <option value="Bride">Bride side</option>
                <option value="Groom">Groom Side</option>
                <option value="both">Common</option>
              </select>
            </div>

            <button
              className="border p-2 rounded-lg flex gap-2 justify-center items-center bg-rose-300 hover:bg-rose-400 text-lg"
              onClick={handleEditProfile}
            >
              <IoIosSave />
              {loading ? "Saving Data . . . " : "Save Data"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEditModal;