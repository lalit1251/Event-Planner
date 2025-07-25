import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js"
import User from "./models/userrModel.js"


const seederAdmin = async ()=>{
    await connectDB();



const adminPassword = await bcryt.hash("Admin@123",10);
const AdminUser = {
    name: "Admin User",
    email: "admin@mywebsite.com",
    number:"9691973978",
    photo:"https://placehold.co/600x400?text=A",
    gender:"Male",
    representing : "N/A",
    occupation: "N/A",
    address: "N/A",
    city: "N/A",
    state: "Active",
    district: "N/A",
    role:"Admin",
}



const existingAdmin = await findOne({role:"Admin"});
// await existingAdmin.delete();

let admin 
if(existingAdmin){
    admin = await User.FindByIdAndUpdate({_id:existingAdmin._id},AdminUser,{new:true});
    console.log("Admin User Updated Successufully",admin.email);
}
else{
     admin = await User.create(AdminUser);
     console.log("Admin User Created Successufully",admin.email);

    }

    process.exit(1);

};

seederAdmin();