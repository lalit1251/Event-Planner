import nodemailer from "nodemailer";

const sendEmail = async (to, subject, mailBody) => {
  try {
    const Loary = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSCODE,
      },
    });

    console.log("Loary is ready");

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject,
      html: mailBody,
    };

    console.log("Loary loaded the mail");

    const result = await Loary.sendMail(mailOptions);
    console.log("Email Sent Successfully", result.messageId);
    return true;

  } catch (error) {
    console.error("Error sending Email", error);
    return false;
  }
};


export default sendEmail;