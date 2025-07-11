import React, { useState } from "react";
import Sidebar from "../components/Customer/Sidebar";
import Overview from "../components/Customer/Overview";
import Profile from "../components/Customer/Profile";
import Bookings from "../components/Customer/Bookings";
import Support from "../components/Customer/Support";
import Feedback from "../components/Customer/Feedback";



const CustomerDashboard = () => {
    const [active , setActive] = useState("overview");
  return (
    <>
    <div className="flex">
        <Sidebar active={active} setActive={setActive}/>
        <div className="border w-full">
            {active === "overview" && <Overview />}
            {active === "profile" && <Profile />}
            {active === "bookings" && <Bookings />}
            {active === "support" && <Support/>}
            {active === "feedback" && <Feedback/>}

        </div>

    </div>
    </>
  )
}

export default CustomerDashboard ;