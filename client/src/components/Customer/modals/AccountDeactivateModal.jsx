import React, { useEffect, useState } from "react";
import { IoIosCloseCircle, IoIosSave } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import api from "../../../config/api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AccountDeactivateModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [deactivationData, setDeactivationData] = useState({
    reason: "",
    feedback: "",
    confirmPassword: "",
    confirmDeactivation: false,
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDeactivationData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDeactivateAccount = async (e) => {
    e.preventDefault();

    if (!deactivationData.confirmDeactivation) {
      toast.error("Please confirm that you want to deactivate your account");
      return;
    }

    if (!deactivationData.confirmPassword) {
      toast.error("Please enter your password to confirm");
      return;
    }

    setLoading(true);

    try {
      const res = await api.put("/user/deactivate", deactivationData);

      toast.success(res.data.message);
      onClose();
      navigate("/");
    } catch (error) {
      toast.error(
        `Error: ${error.response?.status || error.message} | ${
          error.response?.data.message || "Failed to deactivate account"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;
  return (
    <>
      <div className="inset-0 fixed bg-black/70 flex justify-center items-center z-50">
        <div
          className={`border w-2/3 max-w-2xl max-h-[80vh] mt-10 bg-white rounded-xl shadow-2xl overflow-y-auto`}
        >
          <div className="text-xl flex justify-between p-6 border-b-2 border-red-200 sticky top-0 bg-white z-10">
            <h1 className="font-bold text-red-600 text-2xl">
              Deactivate Your Account
            </h1>
            <button
              onClick={onClose}
              className="hover:scale-110 transition-transform"
            >
              <IoIosCloseCircle className="text-3xl text-red-500 hover:text-red-700" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Warning Message */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-red-800">
                    Account Deactivation Warning
                  </h3>
                  <p className="mt-2 text-sm text-red-700">
                    Deactivating your account will temporarily disable your
                    access to our services. You can reactivate it later by
                    logging in again. However, some data may be lost
                    permanently.
                  </p>
                </div>
              </div>
            </div>

            {/* Deactivation Form */}
            <form onSubmit={handleDeactivateAccount} className="space-y-6">
              {/* Reason Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Why are you deactivating your account? *
                </label>
                <select
                  name="reason"
                  value={deactivationData.reason}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select a reason</option>
                  <option value="not-using">
                    I'm not using the service anymore
                  </option>
                  <option value="privacy-concerns">Privacy concerns</option>
                  <option value="found-alternative">
                    Found a better alternative
                  </option>
                  <option value="too-expensive">Too expensive</option>
                  <option value="technical-issues">Technical issues</option>
                  <option value="temporary-break">
                    Taking a temporary break
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Feedback */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Additional feedback (optional)
                </label>
                <textarea
                  name="feedback"
                  value={deactivationData.feedback}
                  onChange={handleInputChange}
                  placeholder="Help us improve by sharing your experience..."
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                />
              </div>

              {/* Password Confirmation */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Confirm your password *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={deactivationData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Enter your current password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              {/* Final Confirmation */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="confirmDeactivation"
                    checked={deactivationData.confirmDeactivation}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I understand that deactivating my account will temporarily
                    disable my access to all services. I confirm that I want to
                    proceed with account deactivation.
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || !deactivationData.confirmDeactivation}
                  className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Deactivating...
                    </>
                  ) : (
                    "Deactivate Account"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDeactivateModal;