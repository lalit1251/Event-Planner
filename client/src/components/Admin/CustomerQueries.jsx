import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../config/api";
import toast from "react-hot-toast";
import {
  FaEye,
  FaEdit,
  FaSearch,
  FaFilter,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import ContactViewModal from "./modals/ContactViewModal";

const CustomerQueries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [isContactViewModalOpen, setIsContactViewModalOpen] = useState(false);

  const fetchAllCoustomerQueries = async () => {
    try {
      setLoading(true);
      const res = await api.get("admin/contacts");
      // toast.success(res.data.message);
      let x = "message";
      toast.success(res["data"][x]);
      setQueries(res.data.data);
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
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

    const config = statusConfig[status] || statusConfig.pending;
    const IconComponent = config.icon;

    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}
      >
        <IconComponent className="text-xs" />
        {status?.charAt(0).toUpperCase() + status?.slice(1).replace("_", " ")}
      </span>
    );
  };

  const filteredQueries = queries.filter((query) => {
    const matchesSearch =
      query.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      query.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      query.phone?.includes(searchTerm);

    const matchesStatus =
      statusFilter === "all" || query.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewQuery = (query) => {
    setSelectedQuery(query);
    setIsContactViewModalOpen(true);
  };

  //const handleStatusEdit = (query) => {};

  useEffect(() => {
    fetchAllCoustomerQueries();
  }, [isContactViewModalOpen]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-50 min-h-[87vh] p-6 overflow-y-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Customer Queries
          </h1>
          <p className="text-gray-600">
            Manage and respond to customer inquiries
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              >
                <option value="all">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Resolved">Resolved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Queries Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {filteredQueries.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaUser className="text-indigo-600" />
                        Customer
                      </div>
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaEnvelope className="text-indigo-600" />
                        Email
                      </div>
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaPhone className="text-indigo-600" />
                        Phone
                      </div>
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredQueries.map((query, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {query.name?.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {query.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              Customer
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{query.email}</td>
                      <td className="px-6 py-4 text-gray-600">{query.phone}</td>
                      <td className="px-6 py-4">
                        {getStatusBadge(query.status)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewQuery(query)}
                            className="px-3 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors flex gap-3 items-center"
                          >
                            <FaEye /> View Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-3xl text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No Queries Found
              </h3>
              <p className="text-gray-500">
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "No customer queries have been submitted yet"}
              </p>
            </div>
          )}
        </div>

        {/* Stats Cards */}
      </div>

      {/* Query Details Modal */}
      <ContactViewModal
        isOpen={isContactViewModalOpen}
        onClose={() => setIsContactViewModalOpen(false)}
        Query={selectedQuery}
      />
    </>
  );
};

export default CustomerQueries;