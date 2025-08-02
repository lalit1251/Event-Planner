import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Admin/Sidebar";
import Overview from "../components/Admin/Overview";
import Customers from "../components/Admin/Customers";
import Bookings from "../components/Admin/Bookings";
import CustomerQueries from "../components/Admin/CustomerQueries";
import CustomerFeedback from "../components/Admin/CustomerFeedback";
import BanquetHall from "../components/Admin/BanquetHall";


const AdminPannel = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");
  const { isLogin, isAdmin } = useAuth();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, isAdmin, navigate]);


  return (
    <>
      <div className="flex">
        <Sidebar active={active} setActive={setActive} />
        <div className="w-full">
          {active === "overview" && <Overview />}
          {active === "banquetHall" && <BanquetHall />}
          {active === "customers" && <Customers />}
          {active === "bookings" && <Bookings />}
          {active === "cusQueries" && <CustomerQueries />}
          {active === "cusFeedback" && <CustomerFeedback />}
        </div>
      </div>
    </>
  );
};

export default AdminPannel;