import nodemailer from "nodemailer";



const sendEmail = async (toString,subject,mailBody)=>{

    try {
        const transpoter = nodemailer.create
        
    } catch (error) {
        console.error('Error sending Email',error);
        return false
        
    }
}