import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const ProfileEditModal = ({ isOpen, onClose, oldData }) => {
  const [userdata, setUserData] = useState(oldData);

  if (!isOpen) return null;
  return (
    <>
      <div className="inset-0 fixed bg-black/70 flex justify-center items-center">
        <div className="border w-1/2 min-h-7/10 mt-10 bg-white rounded-lg">
          <div className="text-xl flex justify-between p-3 border-b-2">
            <h1 className="font-bold">Edit Profile</h1>
            <button onClick={onClose}>
              <IoIosCloseCircle className="text-3xl text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEditModal;