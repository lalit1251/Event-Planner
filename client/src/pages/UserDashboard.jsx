import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../config/api";

const UserDashboard = () => {
  const [userdata, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    number: "123-456-7890",
    wallet: 5000,
    lastLogin: "6 July, 2025",
    ip: "192.168.1.23",
    device: "Chrome on Windows",
    notifications: [],
    events: []
  });

  const [activeSection, setActiveSection] = useState("Dashboard");

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

  useEffect(() => {
    fetchUserData();
  }, []);

  const sections = [
  "Dashboard",
  "Wallet",
  "Notifications",
  "Event Timeline",
  "Login Activity",
  "Account Settings"
];

const SidebarItem = ({ label }) => (
    <div
      onClick={() => setActiveSection(label)}
      className={`cursor-pointer px-3 py-2 rounded-md transition-all text-sm ${
        activeSection === label
          ? "bg-[#ffe6eb] text-[#c94a6a] font-semibold shadow-sm"
          : "text-[#905c66] hover:text-[#c94a6a]"
      }`}
    >
      {label}
    </div>
  );

  const WalletSection = () => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-[#fbd3dd]">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-[#c94a6a] mb-1">
            Wallet Balance
          </h3>
          <p className="text-2xl font-bold text-[#e56c84]">₹{userdata.wallet}</p>
        </div>
        <button className="bg-[#e56c84] text-white px-4 py-2 rounded-md hover:bg-[#d25c74] text-sm">
          Add Funds
        </button>
      </div>
    </div>
  );

  const NotificationsSection = () => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-[#fbd3dd]">
      <h3 className="text-lg font-semibold text-[#c94a6a] mb-4">Notifications 💌</h3>
      <ul className="space-y-2 text-sm text-[#5e3e3e] list-disc list-inside">
        <li>New message from planner</li>
        <li>Payment reminder for catering</li>
        <li>Vendor confirmed: Floral Decor</li>
      </ul>
    </div>
  );

  const TimelineSection = () => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-[#fbd3dd]">
      <h3 className="text-lg font-semibold text-[#c94a6a] mb-4">Event Timeline 💍</h3>
      <ul className="space-y-2 text-sm text-[#5e3e3e]">
        <li>🎶 Sangeet: 18 Dec, 6 PM</li>
        <li>💍 Wedding: 20 Dec, 9 AM</li>
        <li>🎉 Reception: 21 Dec, 8 PM</li>
      </ul>
    </div>
  );

  const LoginSection = () => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-[#fbd3dd]">
      <h3 className="text-lg font-semibold text-[#c94a6a] mb-4">Login Activity</h3>
      <p className="text-sm text-[#5e3e3e]">
        <b>Last Login:</b> {userdata.lastLogin}
      </p>
      <p className="text-sm text-[#5e3e3e]">
        <b>IP:</b> {userdata.ip}
      </p>
      <p className="text-sm text-[#5e3e3e]">
        <b>Device:</b> {userdata.device}
      </p>
    </div>
  );

  const SettingsSection = () => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-[#fbd3dd]">
      <h3 className="text-lg font-semibold text-[#c94a6a] mb-4">Account Settings</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[#e56c84] text-white text-sm px-4 py-2 rounded-md hover:bg-[#d25c74]">
          Logout
        </button>
        <button className="border border-red-400 text-red-500 text-sm px-4 py-2 rounded-md hover:bg-red-50">
          Delete Account 💔
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff1f5] via-[#fff5f8] to-[#fffafc] flex flex-col md:flex-row font-serif">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white border-r border-[#fbd3dd] p-6 shadow-sm">
        <div className="text-center mb-8">
          <div >
            <img src={userdata.photo} alt="" className="w-24  h-24 rounded-full mx-auto bg-[#ffe6eb] text-[#e56c84] flex items-center justify-center text-3xl font-bold shadow-inner" />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-[#c94a6a]">{userdata.name}</h2>
          <p className="text-sm text-[#7d5a5a]">{userdata.email}</p>
          <p className="text-sm text-[#7d5a5a]">{userdata.number}</p>
        </div>
        <nav className="space-y-3">
          {sections.map((s) => (
            <SidebarItem key={s} label={s} />
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {activeSection === "Dashboard" && (
          <>
           <div className="">

           </div>
          </>
        )}

        {activeSection === "Wallet" && <WalletSection />}
        {activeSection === "Notifications" && <NotificationsSection />}
        {activeSection === "Event Timeline" && <TimelineSection />}
        {activeSection === "Login Activity" && <LoginSection />}
        {activeSection === "Account Settings" && <SettingsSection />}
      </main>
    </div>

);

  
};

export default UserDashboard;