import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
  FaPaperPlane,
  FaEdit,
} from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import api from "../../../config/api";
import toast from "react-hot-toast";

const ContactViewModal = ({ isOpen, onClose, Query }) => {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    status: "Pending",
    reply: "",
  });

  const [updateData, setUpdateData] = useState({
    status: "",
    reply: "",
  });

  const [loading, setLoading] = useState(false);

  const statusConfig = {
    Pending: {
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      icon: FaClock,
    },
    Resolved: {
      color: "bg-green-100 text-green-800 border-green-200",
      icon: FaCheckCircle,
    },
    Rejected: {
      color: "bg-red-100 text-red-800 border-red-200",
      icon: FaExclamationCircle,
    },
  };

  useEffect(() => {
    if (Query && isOpen) {
      setQuery(Query);
      setUpdateData({
        status: Query.status || "Pending",
        reply: Query.reply || "",
      });
    }
  }, [Query, isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setQuery((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateQuery = async () => {
    if (!updateData.reply.trim()) {
      toast.error("Please enter a reply message");
      return;
    }

    setLoading(true);
    try {
      const res = await api.put(`/admin/contacts/${query._id}`, {
        status: updateData.status,
        reply: updateData.reply,
      });

      toast.success("Query updated successfully");
      setQuery((prev) => ({ ...prev, status: updateData.status }));
      onClose();
    } catch (error) {
      toast.error(
        `Error: ${error.response?.status || error.message} | ${
          error.response?.data.message || "Failed to update query"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const Icon = statusConfig[query?.status]?.icon || FaClock;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm top-20"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl p-6 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
                  {query.name?.charAt(0)?.toUpperCase()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Query Details</h3>
                  <p className="text-indigo-100">Customer Support Ticket</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium border-2 ${
                    statusConfig[query?.status]?.color ||
                    statusConfig.Pending.color
                  } bg-white`}
                >
                  <Icon className="inline mr-2" />
                  {query.status}
                </span>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all"
                >
                  <IoMdCloseCircle className="text-2xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Customer Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Customer Name
                  </label>
                  <p className="text-lg font-medium text-gray-900">
                    {query.name}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Email Address
                  </label>
                  <p className="text-gray-900">{query.email}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Phone Number
                  </label>
                  <p className="text-gray-900">{query.phone}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Subject
                  </label>
                  <p className="text-gray-900">{query.subject}</p>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
                <label className="block text-sm font-semibold text-blue-700 mb-2">
                  Customer Message
                </label>
                <p className="text-gray-800 leading-relaxed">{query.message}</p>
              </div>
            </div>

            {/* Admin Response Section */}
            <div className="border-t-2 border-gray-200 pt-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaEdit className="text-indigo-600" />
                Admin Response
              </h4>

              <div className="space-y-4">
                {/* Status Update */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Update Status
                  </label>
                  <select
                    name="status"
                    value={updateData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    disabled={Query.status !== "Pending"}
                  >
                    <option value="Pending">🟡 Pending</option>
                    <option value="Resolved">🟢 Resolved</option>
                    <option value="Rejected">🔴 Rejected</option>
                  </select>
                </div>
                {/* Reply Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reply Message *
                  </label>
                  <textarea
                    name="reply"
                    value={updateData.reply}
                    onChange={handleInputChange}
                    placeholder="Write your response to the customer..."
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                    disabled={Query.status !== "Pending"}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateQuery}
                    disabled={
                      loading ||
                      !updateData.reply.trim() ||
                      Query.status !== "Pending"
                    }
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Updating...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Response
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactViewModal;