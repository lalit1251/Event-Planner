import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db.js"
import User from "../models/userModel.js"
import bcrypt from "bcrypt";


const seedAdmin = async ()=>{
    await connectDB();



const adminPassword = await bcrypt.hash("Admin@123",10);
const AdminUser = {
    name: "Admin User",
    email: "admin@mywebsite.com",
    password: adminPassword,
    number:"9691973978",
    photo:"https://placehold.co/600x400?text=A",
    gender:"male",
    representing : "N/A",
    occupation: "N/A",
    address: "N/A",
    city: "N/A",
    state: "N/A",
    district: "N/A",
    role:"Admin",
    status:"Active",
}



const existingAdmin = await User.findOne({role:"Admin"});
// await existingAdmin.delete();

let admin ;
if(existingAdmin){
    admin = await User.FindByIdAndUpdate(existingAdmin._id,AdminUser,{new:true});
    console.log("Admin User Updated Successufully",admin.email);
}
else{
     admin = await User.create(AdminUser);
     console.log("Admin User Created Successufully",admin.email);

    }

    process.exit(1);

};

seedAdmin();