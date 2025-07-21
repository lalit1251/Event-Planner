import mongoose from "mongoose";


const contactUsSchema = mongoose.Schema(
    {
     name:{
        type : String,
        required : true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    feedback:{
        type: String,
        required: true,
    },
},
{ timestamps: true }
);

const ContactUs = mongoose.model("ContactUs", contactUsSchema);

export default ContactUs;