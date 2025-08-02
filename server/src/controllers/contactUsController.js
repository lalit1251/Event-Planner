import Contact from "../models/contactUsModel.js";

export const SubmitContactForm = async (req, res, next) => {
  try {
    const { name, email, feedback, subject , number  } = req.body;


    if (!name || !email || !feedback || !subject || !number) {
      const error = new Error("All fields are required.");
      error.statusCode = 400;
      return next(error);
    }

   

    const newFeedback = await Contact.create({ name, email, feedback ,subject,number , status: "Pending", });

    console.log("New feedback form submission:", newFeedback);
    
    res.status(201).json({
      message: `Thanks for Contacting Us. You will receive a Response soon at ${newFeedback.email}`,
      data: newFeedback,
    });
  } catch (error) {
    next(error);
  }
};